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

//Mongoose / Model Config
// var personSchema = new mongoose.Schema({
//     firstname: String,
//     lastname: String,
//     compare: String,
//     answers: Object,
//     created: {type: Date, default: Date.now}
// });

// var Person = mongoose.model("Person", personSchema);

var activities = ["Painting", "Tennis", "Volleyball", "Broadway", "Hiking", "Swimming" ];

//Home Page
app.get("/", homeHook);

//Results Page
app.get("/results/:id", resultHook);

//Create Blog Post route

app.post("/people", peopleHook);

// function(req, res){
//     var finalAnswers = {};
//     var answers = req.body.answers;
//     var x;
//         for (x in answers) {
//              if (answers.hasOwnProperty(x)) {
//         // do stuff
//         finalAnswers[x] = parseInt(answers[x])
        
//             }
//         }
    
//     Person.create({
//         firstname: req.body.person.firstname,
//         lastname: req.body.person.lastname,
//         compare: req.body.person.compare,
//         answers: finalAnswers,
        
//     }, function(err, newPerson){
//         if(err){
//             console.log(err);
//             res.render("/");
//         } else {
//             res.redirect("/results/"+newPerson._id);
//         }
//     });
// };



//Serve the app on Cloud 9 Port 
//https://datenight-linguistic151.c9users.io
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Your Datenight has commenced!");
});