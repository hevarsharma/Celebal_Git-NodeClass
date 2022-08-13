const mysql = require('mysql');

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "",
    database: "student-demo1"
});

connection.connect( function (err) {
    if(err) {
        console.log(`Error is $ ${err}`);
    } else {
        console.log('Database is connected..............')
    }
})

module.exports = connection;