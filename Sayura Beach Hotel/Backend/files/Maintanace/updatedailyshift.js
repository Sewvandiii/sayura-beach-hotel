const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Sayura-Beach-Hotel'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected! Update daily shift');
});

module.exports = function (app){
    app.get('/updatedailshift', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE, GET');
        connection.query('UPDATE dailyshift SET nic="'+req.query.NIC+'",time="'+req.query.time+'",date="'+req.query.date+'",section="'+req.query.section+'",position="'+req.query.position+'"',(err,rows) =>{
            console.log('Done',err);
        });
    });
}