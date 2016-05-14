import path from 'path';
import db   from '../../utils/db';
import sql  from '../../utils/sql';

// Create table
db.query(sql(path.join(__dirname, './createTable.sql')))
    .catch(err => {
        console.log(err);
    });