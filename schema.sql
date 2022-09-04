drop database if exists cloudy;

create database cloudy;

use cloudy;

create table Tricks (
  id int not null auto_increment,
  trick varchar(20) not null,
  redirect varchar(100) not null,
  primary key(id)

)
