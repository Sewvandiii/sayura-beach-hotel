const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'sayura-beach-hotel'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected! edit');
});

module.exports = function(app){

    app.get('/edit',function(req, res){
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE,PUT');

        let sql = `SELECT * FROM addvehicle 
        INNER JOIN vehicle on addvehicle.Vehicle = vehicle.vID 
        INNER JOIN vehicleModel on addvehicle.VehicleModel=vehicleModel.mID 
        where addvehicle.vehicleID = "${req.query.VehicleID}";`
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

    // app.get('/getVehicleByModel', (req, res) => {
    //     console.log(req.query.model);
    //     connection.query(`SELECT * FROM vehicleModel where vID = ${req.query.model}`,(err,rows)=>{
    //         if(err) {
    //             console.log(err);
    //             res.status(500).json({code: 500, data: 'Query Error'})
    //         }
    //         else{
    //             let vehicles = rows.map(row => { return {text: row.mName, value: row.mID}});
    //             res.status(200).json(vehicles);
    //         }   
    //     });
    // });

    // app.get('/getmakes',function(req,res){
    //     connection.query("SELECT * FROM vehicle",(err,rows)=>{
    //         if(err) {
    //             console.log(err);
    //             res.status(500).json({code: 500, data: 'Query Error'})
    //         }
    //         else{
    //             let makes = rows.map(row => { return {text: row.vName, value: row.vID}});
    //             res.status(200).json(makes);
    //         }   
    //     });
    // });
};