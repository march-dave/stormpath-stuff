'user strinc';

var express = require('express');
var router = express.Router();
var stormpath = require('express-stormpath');

router.get('/me', stormpath.loginRequired, (req, res) => {

  for(var key in req.body) {
    req.user[key] = req.body[key];
  }

  req.user.save((err, savedUser) => {
    res.status(err ? 400 : 200).send(err ||  savedUser);
  });

});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');

  req.uesr = req.body;
  req.user.save((err, savedUser) => {
    res.status(err ? 400:200).send(err || savdUser);

  });

});

// PUT /users/me
// update current user
router.put('me')

module.exports = router;
