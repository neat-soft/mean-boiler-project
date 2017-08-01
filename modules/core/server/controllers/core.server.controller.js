'use strict';

var validator = require('validator'),
  path = require('path'),
  config = require(path.resolve('./config/config'));
  var mysql = require('mysql')
  var randomstring = require('randomstring');
  var randomnumber = require('random-number');


/**
 * Render the main application page
 */
exports.getDB = function(req,res){
  var connection = mysql.createConnection({
    host: config.mysqldb.host,
    user: config.mysqldb.user,
    password: config.mysqldb.password,
    database: config.mysqldb.database
  })
  connection.connect(function(err) {
  if (err) throw err
  connection.query('SELECT * FROM social', function(err, results) {
    if (err) throw err
    return res.json(results);
  })
});
}
exports.setDb = function(req,res){
  var connection = mysql.createConnection({
    host: config.mysqldb.host,
    user: config.mysqldb.user,
    password: config.mysqldb.password,
    database: config.mysqldb.database
  })
  var mails = ["gmail","outlook","yahoo"];
  var locations = ["London", "Paris", "Kiev"]
  connection.connect(function(err){
    if (err) throw err
    if (req.body.count <=0)
      return res.send("Input bigger than 0");
    var values = [];
    for (var i = 0; i < req.body.count; i++) {
      var aValue = [];
      var randN = randomnumber({min: 0, max: 2, integer: true})
      aValue.push(randomstring.generate(5));
      aValue.push(randomstring.generate(5) + '@' + mails[randN] + '.com');
      aValue.push(randomnumber({min: 0, max: 1000, integer: true}));
      aValue.push(randomnumber({min: 0, max: 1000, integer: true}));
      aValue.push(randomnumber({min: 0, max: 1000, integer: true}));
      aValue.push(randomnumber({min: 0, max: 1000, integer: true}));
      aValue.push(randomnumber({min: 0, max: 1000, integer: true}));
      aValue.push(randomnumber({min: 0, max: 1000, integer: true}));
      aValue.push(locations[randN]);
      values.push(aValue);
    }
    var sql = "INSERT INTO social (name, email,instagram,blog,twitter,youtube,pinterest,facebook,location) VALUES ?";
    connection.query(sql, [values], function (err){
      if (err) throw err;
      connection.end();
      res.status(200).send("Inserted Data Successfully");
    });
  });
}
exports.renderIndex = function (req, res) {
  var safeUserObject = null;
  if (req.user) {
    safeUserObject = {
      displayName: validator.escape(req.user.displayName),
      provider: validator.escape(req.user.provider),
      username: validator.escape(req.user.username),
      created: req.user.created.toString(),
      roles: req.user.roles,
      profileImageURL: req.user.profileImageURL,
      email: validator.escape(req.user.email),
      lastName: validator.escape(req.user.lastName),
      firstName: validator.escape(req.user.firstName),
      additionalProvidersData: req.user.additionalProvidersData
    };
  }

  res.render('modules/core/server/views/index', {
    user: JSON.stringify(safeUserObject),
    sharedConfig: JSON.stringify(config.shared)
  });
};

/**
 * Render the server error page
 */
exports.renderServerError = function (req, res) {
  res.status(500).render('modules/core/server/views/500', {
    error: 'Oops! Something went wrong...'
  });
};

/**
 * Render the server not found responses
 * Performs content-negotiation on the Accept HTTP header
 */
exports.renderNotFound = function (req, res) {

  res.status(404).format({
    'text/html': function () {
      res.render('modules/core/server/views/404', {
        url: req.originalUrl
      });
    },
    'application/json': function () {
      res.json({
        error: 'Path not found'
      });
    },
    'default': function () {
      res.send('Path not found');
    }
  });
};
