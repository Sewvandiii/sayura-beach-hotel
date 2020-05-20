const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'sayura-Beach-Hotel'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected! view acc');
});

module.exports = function (app) {

    app.get('/viewacc', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
            var query = 'SELECT * FROM emp_accounts WHERE (eid) = ("'+req.query.eid+'")';
            connection.query(query,(err,rows) =>{
                res.json([
                    {
                        data:rows
                    }
                ]);
            });
       
        });
    }