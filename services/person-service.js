var Person = require('../models/person')

function findOneByName(name, callback) {
  Person.find({'firstname': 'Barrak'}, function(err, person){
       if(err){
          console.log(err);
          callback(err,null)
      } else {
          console.log(person);
          callback(null, person)
      }
  });
}

function createPerson(person, answersVar, callback) {
  Person.create({
      firstname: person.firstname,
      lastname: person.lastname,
      answers: answersVar,

  }, function(err, newPerson){
      if(err){
          console.log(err);
          callback(err, null)
      } else {
          callback(null, true)
      }
  });
}


module.exports = {
    findOneByName: findOneByName,
    createPerson: createPerson
}
