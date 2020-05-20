const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Sayura-Beach-Hotel'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected! Update Stock');
});
module.exports = function (app){
    app.get('/updateresdetails', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE,PUT');
        var query = 'UPDATE restaurant SET pid = ("'+req.query.pid+'"), pname = ("'+req.query.pname+'"), quantity = ("'+req.query.quantity+'"), price=("'+req.query.price+'"),ava=("'+req.query.ava+'")';
        console.log('request here', req.query);
        connection.query(query,(err,rows) =>{
            console.log('Error here', err);
        });
   
    });
}
