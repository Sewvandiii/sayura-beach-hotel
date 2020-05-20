const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Sayura-Beach-Hotel'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected attendance');
});

module.exports = function (app){
    app.get('/Attendance', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE,PUT');
        connection.query('INSERT INTO employee_attendance (aId,aDate,aStatus) VALUES ("'+req.query.aId+'","'+req.query.aDate+'","'+req.query.aStatus+'")',(err,rows) =>{
            console.log('Done',err);
        });
    });
}