import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('camiones_encomiendas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default sequelize;