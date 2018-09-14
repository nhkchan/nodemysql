var mysql      = require('./node_modules/mysql');
var connection = mysql.createConnection({
  host     : 'mysql-pr-dbha.apps.osp.loblaw.ca',
  user     : 'admin',
  password : 'admin',
  database : 'cme'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();
