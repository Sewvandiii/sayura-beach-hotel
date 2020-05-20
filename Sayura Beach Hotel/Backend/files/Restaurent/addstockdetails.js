const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Sayura-Beach-Hotel'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected! Add stock');
});

module.exports = function (app) {

    app.get('/addstockdetails', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
        connection.query('INSERT INTO restaurant (pid,pname,quantity,price,ava) VALUES (' + req.query.pid + ',"'+req.query.pname+'","'+req.query.quantity+'","'+req.query.price+'","'+req.query.ava+'")', (err, rows) => {
            console.log('Error here', err);
        });
    });
};