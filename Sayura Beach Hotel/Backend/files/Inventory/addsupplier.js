const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'sayura-beach-hotel'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected add supplier');
});

module.exports = function (app){
    app.get('/addSupplier', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE,PUT');
        connection.query('INSERT INTO supplierdetails(supname,supNIC,address,email,contactNo,supcategory,description) VALUES ("'+req.query.name+'","'+req.query.NIC+'","'+req.query.address+'","'+req.query.email+'","'+req.query.contactNo+'","'+req.query.supcategory+'","'+req.query.description+'")',(err,rows) =>{
            console.log('Done',err);
        });
    });
}

