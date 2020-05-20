const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'sayura-beach-hotel'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected! emp acc');
});

module.exports = function(app){

    app.get('/addacc',function(req, res){
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE,PUT');
        connection.query('INSERT INTO emp_accounts (eid,salary,loan,bonus,total) VALUES ("' + req.query.eid
        + '","'+ req.query.salary + '","' + req.query.loan 
        + '","' + req.query.bonus+ '","'+req.query.total+'")', (err,rows) =>{
            console.log('Done',err);
        });
    });
};


