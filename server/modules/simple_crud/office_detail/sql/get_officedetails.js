'use strict';
(() => {
  const { dbHelper } = require('../../../../helpers');
  module.exports = async (call, callback) => {
    let connection;
    try {
      let response = { status: false, message: 'read Failed' };
     
  
      connection = await dbHelper.getConnection();
      const [rows] = await connection.query(`select v.dep_name,v.dep_email,COUNT(e.id) as total_employes
      from virat_kohli.employ_mig as e
      left join virat_kohli.officev1 as v
      on e.dep_ids=v.id
      group by v.dep_name,v.dep_email` );  
      
       

      return rows;
    } catch (error) {
      throw error;
    }
  };
})();
