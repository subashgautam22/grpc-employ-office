"use strict";

(() => {
  const { dbHelper } = require("../../../../helpers");
 

  module.exports = async (call, callback) => {
    let connection;
    try {
      let response = { status: false, message: "Create Failed" };
      let insert = {
       
        dep_name: call.dep_name,
        dep_email: call.dep_email,
        dep_pos:call.dep_pos,
        
       
      };
      connection = await dbHelper.getConnection();
      const [rows] = await connection.query(
        `insert into virat_kohli.officev1 set ? `, insert
      );
      if (rows && rows.insertId > 0) {
        response.status = true;
        response.message = "Created Successfully";
      }
      return response;
    } catch (error) {
      throw error;
    } 
  };
})();
