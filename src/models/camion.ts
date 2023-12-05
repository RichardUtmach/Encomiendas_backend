import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Camion = db.define('Camion', {
    camion_name: {
        type: DataTypes.STRING
    },
    placa: {
        type: DataTypes.STRING
    },
    propietario: {
        type: DataTypes.STRING
    },
    capacidad: {
        type: DataTypes.DOUBLE
    },
    peso: {
        type: DataTypes.DOUBLE
    },
    estado: {
        type: DataTypes.STRING
    },
    entregados: {
        type: DataTypes.INTEGER
    },
    no_entregados: {
        type: DataTypes.INTEGER
    },
    porcentaje: {
        type: DataTypes.DOUBLE
    },
    viajes: {
        type: DataTypes.INTEGER
    },
    recaudacion: {
        type: DataTypes.DOUBLE
    },
}, {
    createdAt: false,
    updatedAt: false
});

export default Camion;