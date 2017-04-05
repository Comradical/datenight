var personService   = require("../services/person-service.js");
var activities = ["Painting", "Tennis", "Volleyball", "Broadway", "Hiking", "Swimming" ];
    
    // personService.findById(req.params.id, function(err, mainPerson, secondPerson){
    //      if(err){
    //         console.log(err);
    //     }
    //     res.render("results", {activities: activities, person: mainPerson, personTwo: secondPerson,});
    // });
    
module.exports = function(req, res){
    
    console.log("from result hook + " + req.params.id);
    personService.findById(req.params.id, function(err, mainPerson, secondPerson){
        if(err){
            console.log(err);
        } else {
       res.render("results", {activities: activities, person: mainPerson, personTwo: secondPerson,}); 
        }
    });
};