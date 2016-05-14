import path     from 'path';
import db       from '../../utils/db';
import sql      from '../../utils/sql';
import Promise  from 'bluebird';
import jwt      from 'jsonwebtoken';
import bcrypt   from 'bcrypt';

const genHash = Promise.promisify(bcrypt.hash); 
const compare = Promise.promisify(bcrypt.compare);

// Create table
db.query(sql(path.join(__dirname, './createTable.sql')))
    .catch(err => {
        console.log(err);
    });

// Prepare query files
const insert = sql(path.join(__dirname, './insert.sql'));
const find = sql(path.join(__dirname, './find.sql'));
const remove = sql(path.join(__dirname, './remove.sql'));
const getAll = sql(path.join(__dirname, './getAll.sql'));

export default class User {
    static getAll() {
        return db.any(getAll);
    }

    static create(user) {
        return genHash(user.password, 10)
            .then( hash => {
                const newUser = {
                    username: user.username,
                    password: hash
                };

                return db.any(insert, newUser)
            })
    }

    static remove(username) {
        return db.query(remove, {username: username});
    }
}

