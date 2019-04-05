DROP DATABASE  sk8;

CREATE DATABASE sk8;

USE sk8;

CREATE TABLE Tricks (
  id int NOT NULL AUTO_INCREMENT,
  trick varchar(20) NOT NULL,
  redirect varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);      

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
INSERT INTO Tricks ( id, trick, redirect ) VALUES ( null, 'Sample data', 'Sample data' );