"use strict";
(() => {
  const { dbHelper } = require("../../../../helpers");
  module.exports = async (call, callback) => {
    let connection;
    try {
      let response = { status: false };
      let update = {
        first_name: call.first_name,
        last_name: call.last_name,
        swiftpost:call.swiftpost,
        joindate: call.join,
        salary: call.salary,
      };
      connection = await dbHelper.getConnection();
      const [rows] = await connection.query(`UPDATE employ_mig set ? where id = ?`, [
        update,
        call.id,
      ]);
      if (rows && rows.affectedRows > 0) {
        response.status = true;
        response.message = "updated Successfully";
      }
      return response;
    } catch (error) {
      throw error;
    } finally {
    }
  };
})();
