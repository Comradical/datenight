var bodyParser  = require("body-parser"),
express         = require("express"),
mongoose        = require("mongoose"),
app             = express();

//APP config
mongoose.connect("mongodb://localhost/datenight");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//Mongoose / Model Config
var personSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    answers: Object,
    created: {type: Date, default: Date.now}
});

var Person = mongoose.model("Person", personSchema);

var activities = ["Painting", "Tennis", "Volleyball", "Broadway", "Hiking", "Swimming" ];

//Home Page

app.get("/", function(req, res){
  res.render("home", {activities: activities});
});

app.get("/results", function(req, res){
    Person.find({'firstname': 'Barrak'}, function(err, person){
         if(err){
            console.log(err);
        } else {
            console.log(person);
            res.render("results", {activities: activities, person: person});
        }
    });
    
});

//Create Blog Post route

app.post("/people", function(req, res){
    var answersVar = {};
    // for(i = 0; i < 5; i++){
    //     answersVar[i] = {req.body.answers}
    // }
    
    Person.create({
        firstname: req.body.person.firstname,
        lastname: req.body.person.lastname,
        answers: answersVar,
        
    }, function(err, newPerson){
        if(err){
            console.log(err);
            console.log("ERROR " + req.body.person.firstname);
            res.render("/");
        } else {
            console.log("Added new Answers! " + req.body.answers);
            res.redirect("/");
        }
    });
});



//Serve the app on Cloud 9 Port 
//https://datenight-linguistic151.c9users.io
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Your Datenight has commenced!");
});