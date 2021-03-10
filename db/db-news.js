var mysql2 = require('mysql2');

// var db = mysql2.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'projet_news'
// });
var db = mysql2.createConnection({
    host: 'lmc8ixkebgaq22lo.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
    user: 's4ru3fjdfelygh5l',
    password: 'y55czqfkmxkqsecx',
    database: 'pkwo4inobuh3u53h',
    // dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

module.exports = db;