var bodyParser  = require("body-parser"),
express         = require("express"),
mongoose        = require("mongoose"),
app             = express(),
homeHook        = require("./hooks/home-hook.js"),
resultHook      = require("./hooks/result-hook.js"),
peopleHook      = require("./hooks/people-hook.js");

//APP config
mongoose.connect("mongodb://localhost/datenight");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var activities = ["Painting", "Tennis", "Volleyball", "Broadway", "Hiking", "Swimming" ];

//Home Page
app.get("/", homeHook);

//Results Page
app.get("/results/:id", resultHook);

//Create Blog Post route

app.post("/people", peopleHook);

//Serve the app on Cloud 9 Port 
//https://datenight-linguistic151.c9users.io/?compare=58d1949c66d4480ca936fed7
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Your Datenight has commenced!");
});