var bodyParser      = require("body-parser"),
    express         = require("express"),
    mongoose        = require("mongoose"),
    app             = express(),
    Person          = require("./models/person"),
    passport        = require("passport"),
    LocalStrategy   = require("passport-local"),
    methodOverride  = require("method-override"),
    personService   = require("./services/person-service.js");

// routes
var homeHook        = require("./hooks/home-hook.js"),
    resultHook      = require("./hooks/result-hook.js"),
    peopleHook      = require("./hooks/people-hook.js"),
    activitiesHook  = require("./hooks/activities-hook.js"),
    indexRoutes     = require("./hooks/index");


//APP config
mongoose.connect("mongodb://localhost/datenight");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(Person.authenticate()));
passport.serializeUser(Person.serializeUser());
passport.deserializeUser(Person.deserializeUser());

//makes every route know of currentUser
app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   next();
});

//Home Page
app.use(homeHook);
//Activities Page
app.use(activitiesHook);
//Results Page
app.use(resultHook);
//Create Blog Post route
app.use(peopleHook);
//Auth and other Routes
app.use(indexRoutes);

// PLAY AREAA ===================================
// var activities  = ["Painting", "Tennis", "Volleyball", "Broadway", "Hiking", "Swimming", "Hockey", "Table-Top Games" ];


// function fetchActivities(callback){
//     personService.findById(id, function(err, mainPerson, secondPerson){
//         if(err){
//             console.log(err);
//         } else if(secondPerson){
//             callback(mainPerson);
//         } else {
//             console.log("No second Person");
//         }
        
//     });
//     //search for test person's activities
//     //remove "valuable" activities from the activities array
//     //create new array with available activities
    
// }

// function createNewActivities(callback){
//     var unrankedActivities = [];
//     fetchActivities(function(fetchedPerson){
//         var currentActivities = fetchedPerson.answers;
//         activities.forEach(function(activity){
//             //check to see if activity has value
//             if(currentActivities[activity]){
//                 console.log(activity);
//             } else {
//               //if no vlaue, push to unranked activities array
//             unrankedActivities.push(activity);  
//             }
//         });
//         console.log(unrankedActivities);
//     });
// }

// createNewActivities(function(results){
// });






// Leave commented out for now

// function generateActivities(activities){
//     var possibleNewActivities = activities.length;
//     console.log(possibleNewActivities);
// }

// generateActivities(activities);










// END PLAY AREAA ===================================

//Serve the app on Cloud 9 Port 
//https://datenight-linguistic151.c9users.io/?compare=596998bef04f410d9ee13fe5
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Your Datenight has commenced!");
});