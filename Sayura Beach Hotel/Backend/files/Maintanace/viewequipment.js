const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Sayura-Beach-Hotel'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected! View equipment');
});

module.exports = function (app){
    app.get('/viewequipment', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE, GET');
        var query = 'SELECT * FROM equipment WHERE (nic) = ("'+req.query.NIC+'")';
        connection.query(query,(err,rows) =>{
            console.log(rows);
            res.json([
                {
                    data:rows
                    
                }


            ]);
        });
    });
}