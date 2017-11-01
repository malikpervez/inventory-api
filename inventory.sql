DROP DATABASE IF EXISTS inventories;
CREATE DATABASE inventories;

\c inventories;

CREATE TABLE inventory (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  type VARCHAR,
  stock INTEGER

);

INSERT INTO inventory(name,type,stock)
  VALUES ('Jameson', 'Whiskey', 20);
