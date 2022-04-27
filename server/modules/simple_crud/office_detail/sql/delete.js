'use strict';
(() => {
  const { dbHelper } = require('../../../../helpers');
  module.exports = async (call, callback) => {
    let connection;
    try {
      // let response = { status: false, message: 'read Failed' };
      
      connection = await dbHelper.getConnection();
      const [rows] = await connection.query(`delete virat_kohli.officev1  where id =?`,
      [
        call.id
      ]);  
     
    
       

      return rows;
    } catch (error) {
      throw error;
    } 
  };
})();