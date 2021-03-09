var express = require('express');
const db = require('../db/db-news');
var router = express.Router();

router.get('/login/:mail/:pass', (req, res) => {

    var mail = req.params.mail;
    var pass = req.params.pass;

    db.query('SELECT * FROM users WHERE email = "' + mail + '" AND motdepasse = "' + pass + '"',
        function (err, rows) {
            if (err) throw err;

            res.json({
                rows,
                status: 200,
                message: "infos user transmis avec succès"
            })
        });
});

module.exports = router;