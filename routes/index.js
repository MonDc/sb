var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST message. */
router.route('/').post((req, res) => {
  indexController.insertMessage(req.body.iyMessage, 1, new Date().toLocaleString("sv", { timeZone: "Europe/Paris" }), new Date().toLocaleString("sv", { timeZone: "Europe/Paris" })).then(data => {
    console.log(data);
    res.render('index', { title: 'post' });

  }).catch(error => {
    res.send(error)
  })
});

module.exports = router;
