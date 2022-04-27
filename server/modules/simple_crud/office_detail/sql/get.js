'use strict';
(() => {
  const { dbHelper } = require('../../../../helpers');
  module.exports = async (call, callback) => {
    let connection;
    try {
      let response = { status: false, message: 'read Failed' };
      
      connection = await dbHelper.getConnection();
      const [rows] = await connection.query(`select dep_name,dep_email, dep_pos FROM virat_kohli.officev1` );
      
       

      return rows;
    } catch (error) {
      throw error;
    }
  };
})();
