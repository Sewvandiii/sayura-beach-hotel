const mysql = require('mysql');

module.exports = function () {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'Sayura-Beach-Hotel'
    });

    connection.connect((err) => {
        if (err) throw err;
        console.log('Connected!');
    });
return connection;
}
