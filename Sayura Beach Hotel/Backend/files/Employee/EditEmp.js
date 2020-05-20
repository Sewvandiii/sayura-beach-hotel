const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Sayura-Beach-Hotel'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected edit');
});

module.exports = function (app){
    app.get('/EditEmp', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE,PUT');
        connection.query('SELECT * FROM employee WHERE id = "'+req.query.id+'"',(err,rows) =>{
            console.log('Done it',err);
            console.log(rows);
            res.json([{
                data:rows
            }]);
            //response.sendfile('update-emp-details',{user:rows});
            //res.status('update-emp-details').send({user:rows});
            //res.sendstatus(update-emp-details).json({user:rows});
            //res.send('update-emp-details',rows);
           //res.sendfile(__dirname +"/EditEmp",rows);
        });
    });
 
}