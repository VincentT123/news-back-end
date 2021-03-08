var express = require('express');
const db = require('../db/db-news');
var router = express.Router();

router.get('/rech/:motcle', (req, res) => {

    var motcle = req.params.motcle;

    db.query('SELECT * FROM actus WHERE titre LIKE "%' + motcle + '%" OR texte LIKE "%' + motcle + '%"',
        function (err, rows) {
            if (err) throw err;

            res.json({
                rows,
                status: 200,
                message: "liste de recherche transmise avec succès"
            })
        });
});

router.get('/actu/:id', (req, res) => {

    var id = req.params.id;

    db.query('SELECT * FROM actus WHERE ID_actu = "' + id + '"',
        function (err, rows) {
            if (err) throw err;

            res.json({
                rows,
                status: 200,
                message: "actu transmise avec succès"
            })
        });
});

router.get('/carous', (req, res) => {

     db.query('SELECT * FROM actus ORDER BY ID_actu ASC LIMIT 4',
        function (err, rows) {
            if (err) throw err;

            res.json({
                rows,
                status: 200,
                message: "liste d'actus carousel transmise avec succès"
            })
        });
});

router.get('/panel', (req, res) => {

    db.query('SELECT * FROM actus ORDER BY ID_actu DESC LIMIT 4',
       function (err, rows) {
           if (err) throw err;

           res.json({
               rows,
               status: 200,
               message: "liste d'actus panel transmise avec succès"
           })
       });
});

router.get('/categ/:cat', (req, res) => {

    var cat = req.params.cat;

    db.query('SELECT * FROM actus WHERE categ = "' + cat + '" ORDER BY ID_actu DESC',
        function (err, rows) {
            if (err) throw err;

            res.json({
                rows,
                status: 200,
                message: "liste d'une catégorie d'actus transmise avec succès"
            })
        });
});

router.get('/filactus', (req, res) => {

    db.query('SELECT * FROM actus ORDER BY date_actu DESC LIMIT 5',
        function (err, rows) {
            if (err) throw err;

            res.json({
                rows,
                status: 200,
                message: "liste du fil d'actus transmise avec succès"
            })
        });
});

router.get('/pluslus', (req, res) => {

    db.query('SELECT * FROM actus ORDER BY nblu DESC LIMIT 5',
        function (err, rows) {
            if (err) throw err;

            res.json({
                rows,
                status: 200,
                message: "liste des actus les plus lues transmise avec succès"
            })
        });
});


module.exports = router;