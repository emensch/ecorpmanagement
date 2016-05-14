import pgp from 'pg-promise';

const db = pgp(/* Init options */);

console.log(process.env.PG_CONNSTRING);
export default db(process.env.PG_CONNSTRING);