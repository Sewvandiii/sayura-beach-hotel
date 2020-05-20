const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Sayura-Beach-Hotel'
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected add');
});

module.exports = function (app){
    app.get('/AddEmp', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE,PUT');
        connection.query('INSERT INTO employee (id,name,nic,age,Bdate,mobile,Jdate,position,password,gender,marry) VALUES ("'+req.query.id+'","'+req.query.name+'","'+req.query.nic+'","'+req.query.age+'","'+req.query.Bdate+'","'+req.query.mobile+'","'+req.query.Jdate+'","'+req.query.position+'","'+req.query.password+'","'+req.query.gender+'", "'+req.query.marry+'")',(err,rows) =>{
            console.log('Done',err);
        });
    });
}

