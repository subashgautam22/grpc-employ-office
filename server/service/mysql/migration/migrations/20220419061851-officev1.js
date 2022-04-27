'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('officev1', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      dep_name: {
        type: Sequelize.STRING(50), 
        allowNull: false,
      },
      dep_email: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      
      dep_pos:{
        type: Sequelize.INTEGER,
        allowNull: false,

      },

      
    
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('officev1');
  },
};

