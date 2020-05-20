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
    app.get('/updatestock', function (req, res) {
        // res.header("Access-Control-Allow-Origin", "*");
        // res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
        // res.header('Access-Control-Allow-Methods', 'DELETE,PUT');
        var query = 'UPDATE stockdetails SET NIC = ("'+req.query.NIC+'"), telephone = ("'+req.query.supcontactNo+'"), supcategory = ("'+req.query.supcategory+'"), quantity=("'+req.query.quantity+'"),orderedDate=("'+req.query.orderedDate+'"),orderedDate=("'+req.query.orderedDate+'"),purchasedDate=("'+req.query.purchasedDate+'")';
        console.log('request here', req.query);
        connection.query(query,(err,rows) =>{
            console.log('Error here', err);
        });
   
    });
}
