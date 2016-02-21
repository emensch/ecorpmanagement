import thinky   from '../utils/thinky';
import bcrypt   from 'bcrypt';
import Promise  from 'bluebird';
const type = thinky.type;
const r = thinky.r;

const genHash = Promise.promisify(bcrypt.hash);
const compare = Promise.promisify(bcrypt.compare);

const User = thinky.createModel('User', {
    username: type.string().required(),
    hash: type.string().required(),
    createdOn: type.date().default(r.now())
}, {
    pk: 'username'
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

User.define('checkPassword', function(pw) {
    return compare(pw, this.hash); 
});

export default User;