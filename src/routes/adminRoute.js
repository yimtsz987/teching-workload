var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect('admin/index');
});

router.get('/index', function (req, res, next) {
    res.render('index');
});

module.exports = router;
