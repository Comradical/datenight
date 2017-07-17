var express     = require("express");
var router      = express.Router();
var personService   = require("../services/person-service.js");

router.post("/people", function(req, res){
    
    var finalAnswers = {};
    var answers = req.body.answers;
    var x;
    
        for (x in answers) {
             if (answers.hasOwnProperty(x)) {
        // do stuff
        finalAnswers[x] = parseInt(answers[x])
        
            }
        }
        personService.createPerson(req.body.person, finalAnswers, function(err, success){
            if(err) {
            console.log(err);
            }
            res.redirect("/results/"+success._id);
        });
        
});

module.exports = router;