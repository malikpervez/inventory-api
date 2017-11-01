DROP DATABASE IF EXISTS inventory;
CREATE DATABASE inventory;

\c inventory;

CREATE TABLE inventory (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  type VARCHAR,
  stock INTEGER

);

INSERT INTO inventory(name,type,stock)
  VALUES ('Jameson', 'Whiskey', 20);
