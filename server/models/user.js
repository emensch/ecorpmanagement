import thinky   from '../utils/thinky';
import bcrypt   from 'bcrypt';
import Promise  from 'bluebird';
import jwt      from 'jsonwebtoken';
const type = thinky.type;
const r = thinky.r;

const genHash = Promise.promisify(bcrypt.hash);
const compare = Promise.promisify(bcrypt.compare);

const User = thinky.createModel('User', {
    username: type.string().required(),
    hash: type.string().required(),
    createdOn: type.date().default(r.now())
}, {
    pk: 'username',
    enforce_extra: 'remove'
});

User.defineStatic('getAll', function() {
    return this.without('hash').execute();
});

User.defineStatic('create', function(data) {
    delete data.hash;

    return genHash(data.password, 10)
        .then( (hash) => {
            const newUser = new this({hash, ...data});
            return newUser.save();
        })
});

User.defineStatic('delete', function(username) {
    return this.get(username).run()
        .then( (user) => {
            return user.delete();
        })
});

User.defineStatic('getToken', function(data) {
    const user = this.get(data.username).run();
    const verified = user.then( (user) => {
        return compare(data.password, user.hash)
    });

    return Promise.join(user, verified, (user, verified) => {
        if(!verified) {
            return Promise.reject({error: '401'});
        }

        const username = user.username;
        const token = jwt.sign({username}, process.env.JWT_SECRET, { expiresIn: '7d' });
        return {token};
    });
});

export default User;