const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Sayura-Beach-Hotel'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected! View Restaurant Details ');
});
module.exports = function (app){
    app.get('/viewrestaurant', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE,PUT');

        var query = 'SELECT * FROM restaurant';
        connection.query(query,(err,rows) =>{
            console.log(rows);
            res.json([
                {
                    data:rows
                    
                }
            
            ]);
            
        });
   
    });
}