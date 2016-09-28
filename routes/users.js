var express = require('express');
var router = express.Router();
var UserModel = require('../models/UserModel');
var middleware = require('./middleware');

/* GET users listing. */
router.get('/', middleware.auth, function(req, res, next) {
  UsersModel.findOne({ _id: req.user.id }, function(err, user) {
    return res.json(user);
  })

});

module.exports = router;
