create database sito;
use sito;
create table utenti(
	username char(16) PRIMARY KEY,
    password char(16),
    nome char(20),
    cognome char(20),
    data_creazione date
);
select * from utenti;

create table drink(
	id_utente char(16),
	nome varchar(255),
    img varchar(255),
    content json,
    foreign key(id_utente) references utenti(username)
);

select * from drink;

create table musica(
	id_utente char(16),
	nome varchar(255),
    img varchar(255),
    content json,
    foreign key(id_utente) references utenti(username)
);

select * from musica;
