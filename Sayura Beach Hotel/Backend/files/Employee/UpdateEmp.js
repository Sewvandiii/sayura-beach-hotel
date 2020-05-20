const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Sayura-Beach-Hotel'
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected update');
});

module.exports = function (app){
    app.get('/UpdateEmp', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE,PUT');
        connection.query('UPDATE employee  SET name="'+req.query.name+'",nic="'+req.query.nic+'",age="'+req.query.age+'",Bdate="'+req.query.Bdate+'",mobile="'+req.query.mobile+'",Jdate="'+req.query.Jdate+'",position="'+req.query.position+'",password="'+req.query.password+'",gender="'+req.query.gender+'", marry="'+req.query.marry+'" WHERE id="'+req.query.id+'"',(err,rows) =>{
            console.log('Done',err);
        });
    });
}