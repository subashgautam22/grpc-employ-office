'use strict';

(() => {
    const sql = require('../sql');
    const httpStatus = require('http-status');
    module.exports = async (call, callback) => {
      try {
        let response = { response :{status: httpStatus.BAD_REQUEST, message: 'read  Failed'} };
        const dbResponse = await sql.get_id(call.request);
        if (dbResponse && dbResponse.length>0) {
          response.dataList=dbResponse[0]
          response.response.status = httpStatus.OK;
          response.response.message = "sucessfully fetched";
        }
        return callback(null, response);
      } catch (error) {
        return callback(error);
      }
    };
  })();