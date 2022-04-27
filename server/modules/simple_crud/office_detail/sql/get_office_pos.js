'use strict';
(() => {
  const { dbHelper } = require('../../../../helpers');
  module.exports = async (call, callback) => {
    let connection;
    try {
      // let response = { status: false };      
      connection = await dbHelper.getConnection();
      let [rows] = await connection.query(`select v.dep_name,v.dep_email,v.dep_pos,COUNT(e.id) as total_employes
      from virat_kohli.employ_mig as e
      left join virat_kohli.officev1 as v
      on e.dep_ids = v.id
      where dep_pos = ?
      group by v.dep_name,v.dep_email `,[
        call.dep_pos
      ]);  
     
       if (rows && rows.length===0)
       {
         [rows]=await connection.query(`select v.dep_name,v.dep_email,v.dep_pos,COUNT(e.id) as total_employes
         from virat_kohli.employ_mig as e
         left join virat_kohli.officev1 as v
         on e.dep_ids = v.id
         group by v.dep_name,v.dep_email 
         limit ? offset ? `,[
           call.size,
           call.page
         ]);
       }

      return rows;
    } catch (error) {
      throw error;
    } 
  };
})();
