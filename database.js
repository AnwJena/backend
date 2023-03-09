var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'project.cdfivukvrchj.us-east-1.rds.amazonaws.com',
    database: 'project',
    user: 'admin',
    password: 'Root#123',
    connectionLimit: 10,
});

module.exports = connection;



















// const mysql = require('mysql')
// const connection = mysql.createConnection({
//     host: 'localhost',
//     database: 'control_tower',
//     user: 'root',
//     password: 'Rohitkum@r123'
// })

// module.exports = connection
