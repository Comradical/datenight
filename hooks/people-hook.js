var express         = require("express"),
    router          = express.Router(),
    personService   = require("../services/person-service.js");

router.put("/people", isLoggedIn, function(req, res){
    
    var finalAnswers = {};
    var answers = req.body.answers;
    var x;
    
        for (x in answers) {
             if (answers.hasOwnProperty(x)) {
        // do stuff
        finalAnswers[x] = parseInt(answers[x])
        
            }
        }
        
        personService.updateUser(req.user._id, finalAnswers, function(err, success){
            if(err) {
            console.log(err);
            }
            console.log(success);
            res.redirect("/results/"+success._id);
        });
        
});


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;