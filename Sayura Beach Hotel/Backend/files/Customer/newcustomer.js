const connection = require('./../../dbconnection');

module.exports = function (app) {

    app.get('/newcustomer', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
        connection().query('INSERT INTO newcustomer (NIC,name,email,telephone,address) VALUES ("' + req.query.NIC + '","'+req.query.name+'","'+req.query.email+'","'+req.query.telephone+'","'+req.query.address+'")', (err, rows) => {
            console.log('Error here', err);
        });
    });
};

