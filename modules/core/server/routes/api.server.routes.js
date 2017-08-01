'use strict';

module.exports = function (app) {
  // Root routing
  var core = require('../controllers/core.server.controller');
  app.route('/db').get(core.getDB);
  app.route('/db').put(core.setDb);
};
