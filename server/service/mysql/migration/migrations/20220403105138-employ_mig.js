'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('employ_mig', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },

      uuid: {
        type: Sequelize.STRING,
        allowNull: false,
      },


      first_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      
      swiftpost:{
        type: Sequelize.STRING(50),
        allowNull: false,

      },

      email:{
        type: Sequelize.STRING(50),
        allowNull: false,

      },
      
      salary: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      
      dep_ids:
      {
        type:Sequelize.INTEGER,
        allowNull:false,
        
      }
    
    
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('employ_mig');
  },
};

