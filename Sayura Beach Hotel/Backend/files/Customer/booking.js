const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Sayura-Beach-Hotel'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected! Booking');
});

module.exports = function (app) {

    app.get('/addbooking', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'GET');
        connection.query('INSERT INTO booking (NIC,type,from_date,todate,numofguests) VALUES ("' + req.query.NIC + '","'+req.query.type+'","'+req.query.fdate+'","'+req.query.tdate+'","'+req.query.nguests+'")', (err, rows) => {
            console.log('Error here', err);
        });
    });
};