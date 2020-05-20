const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Sayura-Beach-Hotel'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected! Insert daily shift');
});

module.exports = function (app){
    app.get('/updateequipment', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE, GET');
        connection.query('UPDATE equipment SET nic="'+req.query.NIC+'",price="'+req.query.price+'",date="'+req.query.date+'",quantity="'+req.query.quantity+'"',(err,rows) =>{
            console.log('Done',err);
        });
    });
}