const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Sayura-Beach-Hotel'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected! Insert EQ');
});

module.exports = function (app) {

    app.get('/insertequipment', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
        connection.query('INSERT INTO equipment (nic,date,quantity,price) VALUES ("' + req.query.eNIC + '","'+req.query.edate+'","'+req.query.equantity+'","'+req.query.eprice+'")', (err, rows) => {
            console.log('Error here', err);
        });
    });
};