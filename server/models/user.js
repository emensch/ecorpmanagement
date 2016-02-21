import thinky from '../utils/thinky';
const type = thinky.type;
const r = thinky.r;

const User = thinky.createModel('User', {
    username: type.string(),
    password: type.string(),
    createdOn: type.date().default(r.now())
}, {
    pk: 'username'
});

export default User;