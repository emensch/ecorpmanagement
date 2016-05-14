CREATE TABLE IF NOT EXISTS Artists (
    slug        text PRIMARY KEY,
    name        text NOT NULL,
    bio         text NOT NULL,
    socials     jsonb,
    createdOn   timestamp DEFAULT CURRENT_TIMESTAMP
);