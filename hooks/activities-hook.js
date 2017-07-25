var express         = require("express"),
    router          = express.Router(),
    activities      = ["Painting", "Tennis", "Volleyball", "Broadway", "Hiking", "Swimming", "Hockey", "Table-Top Games" ],
    personService   = require("../services/person-service.js");


router.get("/activities", isLoggedIn, function(req, res){

    
    
    res.render("activities", {activities: activities, user: req.user});

    
    
});

function fetchActivities(callback){
    personService.findById(req.user._id, function(err, mainPerson, secondPerson){
        if(err){
            console.log(err);
        } else if(secondPerson){
            callback(mainPerson);
        } else {
            console.log("No second Person");
        }
        
    });
    //search for test person's activities
    //remove "valuable" activities from the activities array
    //create new array with available activities
    
}

function createNewActivities(callback){
    var unrankedActivities = [];
    fetchActivities(function(fetchedPerson){
        var currentActivities = fetchedPerson.answers;
        activities.forEach(function(activity){
            //check to see if activity has value
            if(currentActivities[activity]){
                console.log(activity);
            } else {
              //if no vlaue, push to unranked activities array
            unrankedActivities.push(activity);  
            }
        });
        console.log(unrankedActivities);
    });
}

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}


module.exports = router;