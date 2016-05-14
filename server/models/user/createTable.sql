CREATE TABLE IF NOT EXISTS Users (
    username    text PRIMARY KEY,
    password    text NOT NULL,
    createdOn   timestamp DEFAULT CURRENT_TIMESTAMP
);