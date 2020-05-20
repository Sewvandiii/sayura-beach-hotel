const connection = require('./../../dbconnection');

module.exports = function (app) {

    app.get('/deletecustomer', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
        connection().query("DELETE FROM newcustomer WHERE NIC = '"+req.query.NIC+"'", (err, rows) => {
            console.log('Deleted', err);
        });
    });
};
