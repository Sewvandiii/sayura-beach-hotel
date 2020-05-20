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
    app.get('/updatesupp', function (req, res) {
        // res.header("Access-Control-Allow-Origin", "*");
        // res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
        // res.header('Access-Control-Allow-Methods', 'DELETE,PUT');
        var query = 'UPDATE supplierdetails SET supNIC = ("'+req.query.NIC+'"), supname = ("'+req.query.name+'"), email = ("'+req.query.email+'"), supcategory=("'+req.query.supcategory+'"),address=("'+req.query.address+'"),contactNo=("'+req.query.contactno+'"),description=("'+req.query.description+'")';
        console.log('request here', req.query);
        connection.query(query,(err,rows) =>{
            console.log('Error here', err);
        });
   
    });
}