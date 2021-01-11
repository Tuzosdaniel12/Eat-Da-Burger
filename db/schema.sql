CREATE DATABASE burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE  burgers(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30) NOT NULL,
    createdAT TIMESTAMP  NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
