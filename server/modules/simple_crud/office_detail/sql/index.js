'use strict';

const get_office_pos = require('./get_office_pos');

(() => {
  module.exports = {
    create: require('./create'),
    update: require("./update"),
    get: require("./get"),
    get_id: require("./get_id"),
    delete: require("./delete"),
    get_officedetails:require ("./get_officedetails"),
    get_office_pos:require("./get_office_pos")
  };
})();


