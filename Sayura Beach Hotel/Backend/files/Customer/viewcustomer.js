const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Sayura-Beach-Hotel'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected! View Customer');
});
module.exports = function (app){
    app.get('/viewcustomer', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE,PUT');
        var query = 'SELECT * FROM newcustomer WHERE (NIC) = ("'+req.query.NIC+'")';
        connection.query(query,(err,rows) =>{
            res.json([
                {
                    data:rows
                }
            ]);
        });
   
    });
}