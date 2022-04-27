


"use strict";

(() => {
  const { dbHelper } = require("../../../../helpers");
  const { v4: uuidv4 } = require("uuid");

  module.exports = async (call, callback) => {
    let connection;
    try {
      let response = { status: false, message: "Create Failed" };
      let insert = {
        uuid: uuidv4(),
        first_name: call.first_name,
        last_name: call.last_name,
        swiftpost: call.swiftpost,
        email:     call.email,
        salary:    call.salary,
        dep_ids:  call.dep_ids,
      
      };
      connection = await dbHelper.getConnection();
      const [rows] = await connection.query(
        `insert into employ_mig set ? `, insert
      );
      if (rows && rows.insertId > 0) {
        response.status = true;
        response.message = "Created Successfully";
      }
      return response;
    } catch (error) {
      throw error;
    } finally {
      if (connection) dbHelper.releaseConnection(connection);
    }
  };
})();
