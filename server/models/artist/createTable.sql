CREATE TABLE IF NOT EXISTS artists (
    slug        text PRIMARY KEY,
    name        text NOT NULL,
    bio         text NOT NULL,
    socials     jsonb,
    createdOn   timestamp DEFAULT CURRENT_TIMESTAMP
);