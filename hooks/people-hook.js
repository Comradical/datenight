var personService   = require("../services/person-service");
module.exports = function(req, res){
    var answersVar = {};
    // for(i = 0; i < 5; i++){
    //     answersVar[i] = {req.body.answers}
    // }
    personService.createPerson(req.body.person, answersVar, function(err, success) {
      if(err) {
        console.log(err)
      }
      res.redirect("/");
    })
}
