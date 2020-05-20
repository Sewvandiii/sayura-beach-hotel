const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Sayura-Beach-Hotel'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected! delete');
});

module.exports = function (app) {

    app.get('/tablebookingdelete', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
        connection.query("DELETE FROM tablebooking WHERE tn = '"+req.query.tn+"'", (err, rows) => {
            console.log('Deleted', err);
        });
    });
};
