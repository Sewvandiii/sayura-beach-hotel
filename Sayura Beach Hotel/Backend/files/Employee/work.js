const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Sayura-Beach-Hotel'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected work');
});

module.exports = function (app){
    app.get('/work', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE,PUT');
        connection.query('INSERT INTO employee_work (wId,wDate,wTime,wTimeStatus) VALUES ("'+req.query.wId+'","'+req.query.wDate+'","'+req.query.wTime+'","'+req.query.wTimeStatus+'")',(err,rows) =>{
            console.log('Done',err);
        });
    });
}