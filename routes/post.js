var express = require('express');
var router = express.Router();
var md = require('marked');
var fs = require('fs');


router.get('/:url', function(req, res, next) {
  var ext = req.params.url.split('.')[1];
  var post = fs.readFileSync(__dirname+'/../posts/'+req.params.url, 'utf-8');
  if (ext == 'md' || ext == 'markdown') {
    // Markdown post
    res.render('post', { json: false, content: md(post) });
  }
  if (ext == 'json') {
    // JSON post
    res.render('post', { json: true, content: JSON.parse(post) });
  }
});

module.exports = router;
