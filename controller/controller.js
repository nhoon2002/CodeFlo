var express = require('express');
var router = express.Router();
var Task = require('../mongoModels/Task.js');
var monUser = require('../mongoModels/User')
var path = require('path');

//Passport JS Set-up
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//MySQL database set-up
var db = require('../models');

//Sendgrid set-up
// var email = require('../mail/email');

router.get('/checkssion', function(req, res){
  console.log("CHECK SESSION ID IN EXPRESS", req.session.userID);
  res.json({ sessionUserId: req.session.userID, sessionUserInfo: req.session.userData })
})

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

  // console.log("REGISTER REQ.BODY", req.body);

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
    console.log("FLASH ERRORS", errors);
    res.json(errors);
  }else{

    // db.users.findOne({
    //   where: {
    //     username: username
    //   }
    // }).then(function(data){
    //   // console.log("DATA USER NAME", data.username)
    //   if(data){
    //     console.log("INSIDE USERNAME VALIDATION")
        
    //     var taken = "Username in use. Please choose another.";

    //     res.json(taken);
    //   }else{

        db.users.create(req.body).then(function(user){
          // console.log("UUUSSSSSSSSSSSSSSSER", user)
          // req.session.userID = user.id;
          console.log('\n\n')
          // console.log("POST REGISTER CALL BACK FUNCTION DATA", data);

          monUser.create({ name: user.name, username: user.username, SQLid: user.id }, function (err, doc){
            console.log("DOCS AFTER CREATE", doc);
            req.session.userID = doc._id;
            req.session.userData = doc;

            res.json({user: doc, sessionUserId: req.session.userID, sessionInfo: req.session.userData});
          });

        });
  }
});

router.post('/login', 
  passport.authenticate('local'), function(req, res) {
    console.log("REQ USER AFTER LOG IN", req.user.dataValues.id)
    
    monUser.findOne({ SQLid: req.user.dataValues.id }, function(err, doc){
      if(err){
        console.log(err)
      }else{
        req.session.userID = doc._id;
        req.session.userData = doc;
        console.log("DOCS IN LOGIN ROUTE", doc)
        res.json({sessionUserId: req.session.userID, sessionInfo: req.session.userData})
      }
    })
});

router.get('/logout', function(req, res){
  console.log("SESSION OBJECT BEFORE DESRTOY", req.session)
  console.log("SESSION OBJECT BEFORE DESRTOY", req.session.userID)
  req.logOut();

  req.session.destroy(function(err){
    console.log("SESSION OBJECT AFTER DESRTOY", req.session)
    // console.log("SESSION OBJECT AFTER DESRTOY", req.session.userID)
    res.send(false);
    
  });

});

router.get('*', function(req,res) {
  console.log('sup');
  res.sendFile(path.join(__dirname + "/../public/index.html"));
  console.log('sup');
});

module.exports = router;
