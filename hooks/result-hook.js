var express     = require("express");
var router      = express.Router();
var personService   = require("../services/person-service.js");
var activities = ["Painting", "Tennis", "Volleyball", "Broadway", "Hiking", "Swimming" ];
    
router.get("/results/:id", function(req, res){
    personService.findById(req.params.id, function(err, mainPerson, secondPerson){
        if(err){
            console.log(err);
        } else if(secondPerson){
        res.render("results", {activities: activities, person: mainPerson, personTwo: secondPerson,}); 
        } else {
        res.render("singleResults", {activities: activities, person: mainPerson, personTwo: secondPerson,});    
        }
        
    });
});


module.exports = router;

