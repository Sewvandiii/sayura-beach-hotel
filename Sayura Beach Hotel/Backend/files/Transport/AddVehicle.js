const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'sayura-beach-hotel'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected! add');
});

module.exports = function(app){

    app.get('/AddVehicle',function(req, res){
        console.log(req.query);
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE,PUT');
        connection.query('INSERT INTO AddVehicle (VehicleID,Vehicle,VehicleModel,Licence,Max,Year,Colour) VALUES ("' + req.query.VehicleID 
        + '","'+ req.query.Vehicle + '","'+ req.query.VehicleModel + '","' + req.query.Licence + '","' 
        + req.query.Max + '","' + req.query.Year + '","' + req.query.Colour+'")', (err,rows) =>{
            console.log('Done',err);
        });
    });


    app.get('/getVehicleByModel', (req, res) => {
        console.log(req.query.model);
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE,PUT');
        connection.query(`SELECT * FROM vehicleModel where vID = ${req.query.model}`,(err,rows)=>{
            if(err) {
                console.log(err);
                res.status(500).json({code: 500, data: 'Query Error'})
            }
            else{
                // connection.query(`SELECT * FROM vehicleModel where mName = ${req.query.model}`)
                let vehicles = rows.map(row => { return {text: row.mName, value: row.mID}});
                res.status(200).json(vehicles);
            }   
        });
    });

    app.get('/getmakes',function(req,res){
        connection.query("SELECT * FROM vehicle",(err,rows)=>{
            res.header("Access-Control-Allow-Origin","*");
            res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
            res.header('Access-Control-Allow-Methods', 'DELETE,PUT');
            if(err) {
                console.log(err);
                res.status(500).json({code: 500, data: 'Query Error'})
            }
            else{
                console.log(rows);
                let makes = rows.map(row => { return {text: row.vName, value: row.vID}});
                res.status(200).json(makes);
            }   
        });
    });

};