'use strict';
(() => {
  const { dbHelper } = require('../../../../helpers');
  module.exports = async (call, callback) => {
    let connection;
    try {
      let response = { status: false };      
      connection = await dbHelper.getConnection();
      const [rows] = await connection.query(`select first_name , last_name , swiftpost, salary,email FROM virat_kohli.employ_mig  where id =?`,[
        call.id
      ]);  
     
       

      return rows;
    } catch (error) {
      throw error;
    } 
  };
})();
