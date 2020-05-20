const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Sayura-Beach-Hotel'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected! Update Customer');
});
module.exports = function (app){
    app.get('/updatecustomerbooking', function (req, res) {
        // res.header("Access-Control-Allow-Origin", "*");
        // res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
        // res.header('Access-Control-Allow-Methods', 'DELETE,PUT');
        var query = 'UPDATE booking SET NIC = ("'+req.query.NIC+'"), type = ("'+req.query.type+'"), from-date = ("'+req.query.from_date+'"), todate=("'+req.query.to_date+'"),numofguests=("'+req.query.num_of_guests+'")';
        console.log('request here', req.query);
        connection.query(query,(err,rows) =>{
            console.log('Error here', err);
        });
   
    });
}