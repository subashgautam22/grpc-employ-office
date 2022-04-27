'use strict';
(() => {
  const { dbHelper } = require('../../../../helpers');
  module.exports = async (call, callback) => {
    let connection;
    try {
      let response = { status: false, message: 'read Failed' };
     
  
      connection = await dbHelper.getConnection();
      let [rows] = await connection.query(` select ve.first_name,ve.last_name,ve.swiftpost,vo.dep_name,ve.salary
      from virat_kohli.officev1 as vo
      left join virat_kohli.employ_mig as ve
      on ve.dep_ids= vo.id
      where first_name = ? 
      group by ve.first_name,ve.last_name,ve.swiftpost,vo.dep_name,ve.salary
      `
      , [
        call.first_name
      
       
      ]);  

      if(rows && rows.length===0)
      {
        [rows]=await connection.query(`select ve.first_name,ve.last_name,ve.swiftpost,vo.dep_name,ve.salary
        from virat_kohli.officev1 as vo
        left join virat_kohli.employ_mig as ve
        on ve.dep_ids= vo.id
        where  salary >= ?
        group by ve.first_name,ve.last_name,ve.swiftpost,vo.dep_name,ve.salary`,[
             call.salary
            ]);
      }


      


      return rows;

      
    } catch (error) {
      throw error;
    }
  };
})();
