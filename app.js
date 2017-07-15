var bodyParser      = require("body-parser"),
    express         = require("express"),
    mongoose        = require("mongoose"),
    app             = express(),
    Person          = require("./models/person"),
    passport        = require("passport"),
    LocalStrategy   = require("passport-local");

// routes
var homeHook        = require("./hooks/home-hook.js"),
    resultHook      = require("./hooks/result-hook.js"),
    peopleHook      = require("./hooks/people-hook.js"),
    indexRoutes     = require("./hooks/index");


//APP config
mongoose.connect("mongodb://localhost/datenight");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var activities = ["Painting", "Tennis", "Volleyball", "Broadway", "Hiking", "Swimming" ];

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
app.get("/", homeHook);
//Results Page
app.get("/results/:id", resultHook);
//Create Blog Post route
app.post("/people", peopleHook);
//Auth and other Routes
app.use(indexRoutes);



//Serve the app on Cloud 9 Port 
//https://datenight-linguistic151.c9users.io/?compare=58d1949c66d4480ca936fed7
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Your Datenight has commenced!");
});