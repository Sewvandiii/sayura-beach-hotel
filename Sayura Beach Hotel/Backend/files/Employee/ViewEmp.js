const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Sayura-Beach-Hotel'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected view');
});

module.exports = function (app){
    app.get('/ViewEmp', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE,PUT');
        connection.query('SELECT * FROM employee WHERE id = "'+req.query.VwId+'"',(err,rows) =>{
            console.log('Done it',err);
            console.log(rows);
            res.json([{
                data:rows
            }]);
           
        });
    });
 
}