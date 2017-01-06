var express = require('express');
var router = express.Router();
var selffun=require("../service/model");

/* GET home page. */
router.get('/', function(req, res, next) {
   //global.logger.info("This is an index page!");   
  selffun.fun(function(rows){	  
	  // res.set('Content-Type', 'text/json');
	   res.json((rows));
  });	
  //res.render('index', { title: 'Express' });
});

router.get('/roit', function(req, res, next) {
   //global.logger.info("This is an index page!");   
   res.render('roit', { title: 'roit' });
});

router.get('/vue', function(req, res, next) {
   //global.logger.info("This is an index page!");   
   res.render('vue', { title: 'vue' });
});

router.get('/vuewp', function(req, res, next) {
   //global.logger.info("This is an index page!");   
   res.render('vuewp', { title: 'vue' });
});

module.exports = router;
