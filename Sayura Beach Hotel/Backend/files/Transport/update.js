const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'sayura-beach-hotel'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected! update');
});

module.exports = function(app){

    app.get('/update',function(req, res){
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE,PUT');
        connection.query('UPDATE addvehicle  SET VehicleID="'+req.query.VehicleID+'",Vehicle="'+req.query.Vehicle+'",VehicleModel="'+req.query.VehicleModel+'",Licence="'+req.query.Licence+'",Max="'+req.query.Max+'",Year="'+req.query.Year+'",Colour="'+req.query.Colour+'" WHERE VehicleID="'+req.query.VehicleID+'"',(err,rows) =>{
            console.log('update',err);
        });
    });

    app.get('/getVehicleByModel', (req, res) => {
        console.log(req.query.model);
        connection.query(`SELECT * FROM vehicleModel where vID = ${req.query.model}`,(err,rows)=>{
            if(err) {
                console.log(err);
                res.status(500).json({code: 500, data: 'Query Error'})
            }
            else{
                let vehicles = rows.map(row => { return {text: row.mName, value: row.mID}});
                res.status(200).json(vehicles);
            }   
        });
    });

    app.get('/getmakes',function(req,res){
        connection.query("SELECT * FROM vehicle",(err,rows)=>{
            if(err) {
                console.log(err);
                res.status(500).json({code: 500, data: 'Query Error'})
            }
            else{
                let makes = rows.map(row => { return {text: row.vName, value: row.vID}});
                res.status(200).json(makes);
            }   
        });
    });
};