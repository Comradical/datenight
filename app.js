var bodyParser  = require("body-parser"),
express         = require("express"),
mongoose        = require("mongoose"),
app             = express(),
homeHook        = require("./hooks/home-hook"),
resultHook      = require("./hooks/result-hook"),
peopleHook      = require("./hooks/people-hook");

const port = 'port'

//APP config
mongoose.connect("mongodb://localhost/datenight");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set(port, (process.env.PORT || 3000))

//Mongoose / Model Config


var activities = ["Painting", "Tennis", "Volleyball", "Broadway", "Hiking", "Swimming" ];


//Routes
//Home Page
app.get("/", homeHook);
//Result Page
app.get("/results", resultHook);
//Create Blog Post route
app.post("/people", peopleHook);

//Serve the app on Cloud 9 Port
//https://datenight-linguistic151.c9users.io
app.listen(app.get(port), function(){
    console.log("Your Datenight has commenced!");
    console.log('Node app is running on port', app.get(port))
});
