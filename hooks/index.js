var express     = require("express");
var router      = express.Router();
var passport    = require("passport");
var Person      = require("../models/person");


//Login Routes
router.get("/login", function(req, res){
    res.render("login");
});

router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/",
        failureRedirect: "/login"
    }), function( req, res){
        
    });
    
    
//Register Routes
router.get("/register", function(req, res){
    res.render("register");
});

router.post("/register", function(req, res){
    var newUser = new Person({username: req.body.username});
    Person.register(newUser, req.body.password, function(err, user){
       if(err){
           console.log(err);
           return res.render("register");
       } 
       passport.authenticate("local")(req, res, function(){
           res.redirect("/");
       });
    });
});




module.exports = router;