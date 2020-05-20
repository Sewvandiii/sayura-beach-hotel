const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Sayura-Beach-Hotel'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected! View Sup');
});
module.exports = function (app){
    app.get('/viewsup', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE,PUT');
        var query = 'SELECT * FROM supplierdetails WHERE (supNIC) = ("'+req.query.supNIC+'")';
        connection.query(query,(err,rows) =>{
            res.json([
                {
                    data:rows
                }
            ]);
        });
   
    });
}