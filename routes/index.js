var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Post(){
  return knex('posts')
}

/* GET home page. */
router.get('/posts', function(req, res, next) {
  Post().select().then(function(result){
    res.json(200, {posts:result})
  })

});
module.exports = router;
