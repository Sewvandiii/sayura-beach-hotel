const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Sayura-Beach-Hotel'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected! View table booking Details ');
});
module.exports = function (app){
    app.get('/tablebookingview', function (req, res) {
        
        var query = 'SELECT * FROM tablebooking';
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