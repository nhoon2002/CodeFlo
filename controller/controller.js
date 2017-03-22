var express = require('express');
var router = express.Router();
var Task = require('../mongoModels/Task.js');
var path = require('path');

//Passport JS Set-up
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//MySQL database set-up
var db = require('../models');

//Sendgrid set-up
// var email = require('../mail/email');


router.post('/tasks', function(req, res) {
  console.log("\n");
  console.log("controller router post", req.body);
    var task = new Task(req.body);
    task.save(function(err, doc) {
      if(err) {
        console.log(err);
      } else {
        console.log("\n");
        console.log("docs",doc);
        res.send(doc);
      }
    });

});


router.post('/register', function(req, res){

  console.log("REGISTER REQ.BODY", req.body);

  var name = req.body.name;
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  var password2 = req.body.password2;

  //Using express validator*************************************************************************


  req.checkBody('name', 'Must type in name.').notEmpty();
  req.checkBody('username', 'Must type in Username.').notEmpty();
  req.checkBody('email', 'Must type in email.').notEmpty();
  req.checkBody('email', 'Invalid Email').isEmail();
  req.checkBody('password', 'Must type in password.').notEmpty();
  req.checkBody('password2', 'Passwords do not match.').equals(req.body.password);

  var errors = req.validationErrors();

  if(errors){
    console.log("FLASH ERRORS", errors)
    res.json(errors);
  }else{

    db.users.findOne({
      where: {
        username: username
      }
    }).then(function(data){
      if(data){
        // req.flash('Taken', 'That username is already taken.');



        res.send('user exists.');
      }else{

        console.log("line73 req.body",req.body);
        db.users.create(req.body).then(function(data){
          console.log('\n\n');
          console.log("POST REGISTER CALL BACK FUNCTION DATA", data);

          res.json(data);
          // Or redirect to another page.
        });

      }
    });
  }
});
router.get('/register/:query', function(req,res) {
  console.log('running get: register');
  var query = req.params.query;

  console.log("hi",query);

    db.users.findAll({

      where: {
        username: {$like: '%'+query+'%'}
      }
    }).then(function (data) {
        // console.log(data);
        // var array1 = [];
        // array1.push(data);
        res.json(data);
          // return data;



    });


});

router.get('*', function(req,res) {
  console.log('sup');
  res.sendFile(path.join(__dirname + "/../public/index.html"));
  console.log('sup');
});

module.exports = router;
