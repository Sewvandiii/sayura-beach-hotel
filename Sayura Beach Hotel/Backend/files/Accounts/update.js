const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'sayura-beach-hotel'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected Update!');
});

module.exports = function(app){

    app.get('/updateacc',function(req, res){
        // res.header("Access-Control-Allow-Origin","*");
        // res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
        // res.header('Access-Control-Allow-Methods', 'DELETE,PUT');
       
        var query = 'UPDATE emp_accounts SET eid = ("'+req.query.eid+'"), salary = ("'+req.query.salary+'"), loan = ("'+req.query.loan+'"), bonus=("'+req.query.bonus+'")';
        console.log('request here', req.query);
        connection.query(query,(err,rows) =>{
            console.log('Error here', err);


        });
    });
}
