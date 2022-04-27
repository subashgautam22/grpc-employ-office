"use strict";

(() => {
  const sql = require("../sql");
  const httpStatus = require("http-status");
  module.exports = async (call, callback) => {
    try {
      let response = { status: httpStatus.BAD_REQUEST, message: "already deleted " }
     const dbResponse = await sql.delete(call.request);
      if (dbResponse && dbResponse.affectedRows > 0) {
        response.status = httpStatus.OK;
        response.message = "deleted sucessfully";
      }
      return callback(null, response);
    } catch (error) {
      return callback(error);
    }
  };
})();