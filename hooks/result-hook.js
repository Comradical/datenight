var personService   = require("../services/person-service");
var activities = ["Painting", "Tennis", "Volleyball", "Broadway", "Hiking", "Swimming" ];
module.exports = function(req, res){
    personService.findOneByName('Barrak', function(err, person) {
      if(err) {
        console.log(err)
      }
      console.dir(person)
      res.render("results", {activities: activities, person: person});
    })
}
