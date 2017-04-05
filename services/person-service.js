var Person = require('../models/person.js');

function findById(id, callback) {
  Person.findById(id, function(err, mainPerson){
         if(err){
            console.log(err);
            callback(err,null)
        } else {
            var idToCompare = mainPerson.compare;
            Person.findById(idToCompare, function(err, secondPerson){
             if(err){
                 console.log(err);
             } else {
                 console.log(mainPerson);
                 console.log(secondPerson);
                 callback(null, mainPerson, secondPerson)
                  
             }
            });
        }
    });
};

function createPerson(person, finalAnswers, callback) {
  Person.create({
      firstname: person.firstname,
      lastname: person.lastname,
      compare: person.compare,
      answers: finalAnswers
  }, function(err, newPerson){
      if(err){
          console.log(err);
          callback(err, null)
      } else {
          callback(null, newPerson)
      }
});
};


module.exports = {
    findById: findById,
    createPerson: createPerson
}