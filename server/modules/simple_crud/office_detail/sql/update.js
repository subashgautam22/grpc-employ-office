"use strict";
(() => {
  const { dbHelper } = require("../../../../helpers");
  module.exports = async (call, callback) => {
    let connection;
    try {
      let response = { status: false };
      let update = {
        dep_name: call.dep_name,
        dep_email: call.dep_email,
        dep_pos:call.dep_pos,
        
      };
      connection = await dbHelper.getConnection();
      const [rows] = await connection.query(`UPDATE virat_kohli.officev1 set ? where id = ?`, [
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
