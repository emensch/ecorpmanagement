CREATE TABLE IF NOT EXISTS users (
    username    text PRIMARY KEY,
    password    text NOT NULL,
    createdOn   timestamp DEFAULT CURRENT_TIMESTAMP
);