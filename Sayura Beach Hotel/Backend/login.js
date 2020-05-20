const connection = require('./dbconnection');

module.exports = function (app) {

    app.get('/login', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
        if (req.query.user_id) {
            connection().query('SELECT * FROM employee WHERE id ="' + req.query.user_id + '"', (err, rows) => {
                if (err) throw err;
                if (rows[0].password === req.query.pw) {

                    res.json([{
                        login: true,
                        performingUnit: getPerformingUnitToUser(req.query.user_id)
                    }]);
                } else {
                    res.json([{ login: false }]);
                }
            });
        }
        else {
            res.json([{ login: false }]);
        }
    });


    function getPerformingUnitToUser(login) {
        switch (login.slice(0, 2)) {
            case 'AM':
                return 'acc';
            case 'CM':
                return 'cus';
            case 'EM':
                return 'emp';
            case 'MM':
                return 'mam';
            case 'TM':
                return 'trn';
            case 'IM':
                return 'inv';
            case 'RM':
                return 'res';
            default:
                return '';
        }
    }
};