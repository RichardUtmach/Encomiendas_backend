import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Encomienda = db.define('Encomienda', {
    peso: {
        type: DataTypes.DOUBLE
    },
    direccion: {
        type: DataTypes.STRING
    },
    costoenvio: {
        type: DataTypes.DOUBLE
    },
    estado: {
        type: DataTypes.STRING
    },
    id_camion: {
        type: DataTypes.INTEGER
    },
}, {
    createdAt: false,
    updatedAt: false
});

export default Encomienda;