const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'sayura-beach-hotel'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected! view');
});

module.exports = function(app){

    app.get('/view',function(req, res){
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE,PUT');

        let sql = `SELECT * FROM addvehicle
        INNER JOIN vehicle on addvehicle.Vehicle = vehicle.vID 
        INNER JOIN vehicleModel on addvehicle.VehicleModel=vehicleModel.mID `
        connection.query(sql,(err,rows) =>{
            console.log('Done',err);
            console.log(rows);
            res.json([
                {
                    data:rows
                }
            ]);
        });
    });

};