import pgp from 'pg-promise';

export default function (file) {
    return new pgp.QueryFile(file, {minify: true});
}