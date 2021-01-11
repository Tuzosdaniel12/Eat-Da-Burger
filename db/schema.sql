CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE  burgers(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30),
    createdAT TIMESTAMP NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);
