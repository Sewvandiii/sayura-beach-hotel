const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'sayura-beach-hotel'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected add stocks');
});

module.exports = function (app){
    app.get('/addStocks', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE,PUT');
        connection.query('INSERT INTO stockdetails(NIC,telephone,supcategory,quantity,orderedDate,purchasedDate) VALUES ("'+req.query.NIC+'","'+req.query.telephone+'","'+req.query.supCategory+'","'+req.query.quantity+'","'+req.query.orderedDate+'","'+req.query.purchasedDate+'")',(err,rows) =>{
            console.log('Done',err);
        });
    });
}

