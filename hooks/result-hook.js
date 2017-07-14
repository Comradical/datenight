var personService   = require("../services/person-service.js");
var activities = ["Painting", "Tennis", "Volleyball", "Broadway", "Hiking", "Swimming" ];
    
module.exports = function(req, res){
    personService.findById(req.params.id, function(err, mainPerson, secondPerson){
        if(err){
            console.log(err);
        } else if(secondPerson){
        res.render("results", {activities: activities, person: mainPerson, personTwo: secondPerson,}); 
        } else {
        res.render("singleResults", {activities: activities, person: mainPerson, personTwo: secondPerson,});    
        }
        
    });
};