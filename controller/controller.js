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
var Team = require('../mongoModels/Team.js')

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
    console.log("FLASH ERRORS", errors)
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
          monUser.create({ name: user.name, username: user.username, skills: user.skills, SQLid: user.id }, function (err, doc){
            console.log("DOCS AFTER CREATE", doc);
            req.session.userID = doc._id;
            req.session.userData = doc;

            res.json({user: doc, sessionUserId: req.session.userID, sessionInfo: req.session.userData});
          });

        });
  }

});





// for searchform
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


router.get('/newProject/:id', function(req,res) {
  var id = req.params.id;
  console.log('controller: getting details for team:' + id );

  Team.find({"_id": id}).exec(function(err, docs) {
    console.log(docs);
    res.json(docs)
  });
});





router.get('/register/users', function(req,res) {
   db.users.find(
      {
         where: {
         username: {$ne: null}
      }
   }).then(function(data) {
      console.log('AXIOS GET FOR /register/users');
      console.log(data);

      res.json(data);
   })
})

router.post('/teams', function(req, res){

  var teamname = req.body.teamname;
  var description = req.body.description;
  var tech = req.body.tech;

// TODO: validation for team creation

    var teamInfo = {};
    teamInfo.teamname = teamname;
    teamInfo.description = description;
    teamInfo.tech = tech;

    var entry = new Team(teamInfo);
    entry.save(function(err, doc){
      if (err) {
         console.log(err);
      } else {
         console.log(doc);
         res.json(doc)
      }

   });
});

router.get('/teams', function(req, res){
console.log("getting to the controller get Teams");
  Team.find({}).exec(function(err, docs) {
    console.log(docs);
    res.json(docs)
  });



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

router.post('/savepic/:id', function(req, res){
  console.log("REQ PARAMS", req.params.id)
  console.log("REQ BODY", req.body.avatarURL)
  monUser.findOneAndUpdate({ "_id": req.params.id}, { "avatar": req.body.avatarURL }, {"new": true }).exec(function(err, doc){
    if(err){
      console.log(err);
    }else{
      console.log("DOCS", doc)
        req.session.userID = doc._id;
        req.session.userData = doc;
        console.log("DOCS IN LOGIN ROUTE", doc)
        res.json({sessionUserId: req.session.userID, sessionInfo: req.session.userData})
    }
  });
});

// router.post('/edit/username', function(req, res){
  
  
// })

router.get('*', function(req,res) {
  console.log('sup');
  res.sendFile(path.join(__dirname + "/../public/index.html"));
  console.log('sup');
});


module.exports = router;
