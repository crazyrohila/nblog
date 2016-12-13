var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  var files = fs.readdirSync(__dirname+'/../posts');
  var posts = [];
  files.forEach(function(file) {
    posts.push({
      title: file.split('.')[0].replace(/-/g, ' '),
      url: file
    })
  });
  res.render('index', { title: 'Home', posts: posts });
});

module.exports = router;
