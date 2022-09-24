
var express = require('express');

var router = express.Router();

const tsmeController = require('../controllers/tsmeController');
router.route('/').get((req, res) => {
  tsmeController.getMessages(1).then(data => {
    console.log(data);

    res.render('tsme', {
      title: 'post',
      tsMessage: data,
      processedTsMessage: data.map((ele) => {
        var obj = {};
        var date = new Date(ele.created_at);
        obj['message'] = ele.message;
        obj['date'] = date.toLocaleDateString();
        obj['time'] = date.toLocaleTimeString();

        return obj;
      })
    });

  }).catch(error => {
    res.send(error)
  })
});

module.exports = router;
