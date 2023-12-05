-- SQL - ESCRTITO MANUALMENTE -- MYSQL-PHPMYADMIN

-- BASE DE DATOS: camiones_encomiendas

--ESTA TABLA NO ES IMPORTANTE PARA LAS ENCOMIENDAS PERO FUE LA GUIA PARA TODO LO DEMAS.
-- y esta incluida en este proyecto igualmente
CREATE TABLE if not EXISTS `productos` (
    `id` int UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(50) NULL,
    `description` varchar(50) NULL,
    `price` double NULL,
    `stock` int NULL
);


-- ENCOMIENDAS SQL MANUAL ------------------------
CREATE TABLE if not EXISTS `clientes` (
    `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `cedula` varchar(50) NOT NULL,
    `nombres` varchar(50) NOT NULL,
    `telefono` varchar(50) NOT NULL,
    `direccion` varchar(50) NOT NULL
);

CREATE TABLE if not EXISTS `camions` (
    `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `camion_name` varchar(50) NOT NULL,
    `placa` varchar(50) NOT NULL,
    `propietario` varchar(50) NOT NULL,
    `capacidad` double NOT NULL,
    `peso` double NOT NULL,
    `estado` varchar(50) NOT NULL,
    `entregados` int(10) NOT NULL,
    `no_entregados` int(10) NOT NULL,
    `porcentaje` double NOT NULL,
    `viajes` int(10) NOT NULL,
    `recaudacion` double NOT NULL
);

CREATE TABLE if not EXISTS `encomiendas` (
    `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `peso` varchar(50) NOT NULL,
    `direccion` varchar(50) NOT NULL,
    `costoenvio` double NOT NULL,
    `estado` varchar(50) NOT NULL
    `id_camion` int(10) NULL
);

-- PARA PRUEBAS DE GUIA-ENCOMIENDAS (VACIAR Y REINICIAR)
UPDATE encomiendas set id_camion = 0;
UPDATE encomiendas set estado = "🔷Nuevo";
UPDATE camions set peso = 0;
UPDATE camions set estado = "✅Disponible";


UPDATE camions set entregados = 0;
UPDATE camions set no_entregados = 0;
UPDATE camions set porcentaje = 0;
UPDATE camions set viajes = 0;
UPDATE camions set recaudacion = 0;

