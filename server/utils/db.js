import pgp from 'pg-promise';

const db = pgp(/* Init options */);

export default db(process.env.PG_CONNSTRING);