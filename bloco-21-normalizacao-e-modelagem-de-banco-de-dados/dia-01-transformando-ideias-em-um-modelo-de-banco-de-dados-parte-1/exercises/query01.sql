-- Banco de dados do zoologico
CREATE DATABASE IF NOT EXISTS zoologico; 

-- Tabela de Gerentes
USE zoologico;
CREATE TABLE gerentes(
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL
);

-- Tabela de cuidadores
USE zoologico;
CREATE TABLE cuidadores(
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerentes(gerente_id)
);

-- Tabela de animais
USE zoologico;
CREATE TABLE animais(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    especie VARCHAR(45) NOT NULL,
    sexo VARCHAR(45) NOT NULL,
    idade INT NOT NULL,
    localizacao VARCHAR(45) NOT NULL
);

-- Tabela de animais-cuidadores
USE zoologico;
CREATE TABLE animal_cuidador(
	animal_id INT,
    cuidador_id INT,
	CONSTRAINT PRIMARY KEY (animal_id, cuidador_id),
    FOREIGN KEY (animal_id) REFERENCES animais (animal_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidadores (cuidador_id)
);
