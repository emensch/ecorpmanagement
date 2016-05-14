import path     from 'path';
import db       from '../../utils/db';
import sql      from '../../utils/sql';
import genSlug  from 'slug';

// Create table
db.query(sql(path.join(__dirname, './createTable.sql')))
    .catch(err => {
        console.log(err);
    });

// Prepare query files
const insert = sql(path.join(__dirname, './insert.sql'));
const find = sql(path.join(__dirname, './find.sql'));
const update = sql(path.join(__dirname, './update.sql'));
const remove = sql(path.join(__dirname, './remove.sql'));
const getAll = sql(path.join(__dirname, './getAll.sql'));

export default class Artist {
    static getOne(slug) {
        return db.one(find, {slug: slug});
    }

    static getAll() {
        return db.any(getAll);
    }

    static create(artist) {
        const newArtist = {
            slug: genSlug(artist.name),
            name: artist.name,
            bio: artist.bio,
            socials: JSON.stringify(artist.socials)
        };

        return db.query(insert, newArtist);
    }

    static update(slug, artist) {
        const updatedArtist = {
            newSlug: genSlug(artist.name),
            name: artist.name,
            bio: artist.bio,
            socials: JSON.stringify(artist.socials)
        };

        return db.query(update, {slug, ...updatedArtist})
    }

    static remove(slug) {
        return db.query(remove, {slug: slug});
    }
}