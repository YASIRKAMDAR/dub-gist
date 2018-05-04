var express = require('express');
var router = express.Router();
var request = require('request');

var config = require('../../config/index.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Express' });
});

/**
 * search for gist list for a username
 * username: param passed in the URL 
 * Sample URL: https://api.github.com/users/octocat/gists
 */
router.get('/search/:username', function(req, res, next) {
  var searchReq = {
    url: config.service.gistURL.replace("{0}",req.params.username),
    headers: {
      'User-Agent': 'Awesome-Octocat-App'
    }
  };
  // Log request for tracking on Heroku
  console.log(searchReq);
  request(searchReq, function (error, response, body) {
    // Log response for tracking on Heroku
    console.log(error, response, body);
    if (!error) {
      if(response.statusCode === 200) {
        res.json({status:"success", resp: body});
      }
      else {
        res.json({status:"fail", resp: response.statusMessage});
      }  
    }
    else {
      res.json({status:"error", resp: error.statusMessage});
    }
  });
});

/**
 * search for forks for a given gist
 * id: param passed in the URL 
 * Sample URL: https://api.github.com/gists/6cad326836d38bd3a7ae/forks
 */
router.get('/forks/:id', function(req, res, next) {
  var forkid = req.params.id;
  var forksReq = {
    id: req.params.id,
    url: config.service.forkURL.replace("{0}",req.params.id),
    headers: {
      'User-Agent': 'deploy-awesome-App'
    }
  };
  // Log request for tracking on Heroku
  console.log(forksReq);
  request(forksReq, function (error, response, body) {
    // Log request for tracking on Heroku
    console.log(error, response, body);
    if (!error) {
      if(response.statusCode === 200) {
        var forks = JSON.parse(body);
        var top3forks =  forks.slice(-3);
        res.json({status:"success", id:forkid, resp: top3forks });
      }
      else {
        res.json({status:"fail", resp: {err: response.statusMessage}});
      }  
    }
    else {
      res.json({status:"error", resp: {err: error.statusMessage}});
    }
  });
});

module.exports = router;
