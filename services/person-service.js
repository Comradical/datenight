var Person = require('../models/person.js');

function findById(id, callback) {
  Person.findById(id, function(err, mainPerson){
         if(err){
            console.log(err);
            callback(err,null);
        } else {
            var idToCompare = mainPerson.compare;
            if(idToCompare != "undefined"){
                Person.findById(idToCompare, function(err, secondPerson){
                 if(err){
                     console.log(err);
                 } else {
                     callback(null, mainPerson, secondPerson);
                      
                 }
                });
            } else{
                callback(null, mainPerson);
            }
        }
    });
}

function createPerson(person, finalAnswers, callback) {
  Person.create({
      firstname: person.firstname,
      lastname: person.lastname,
      compare: person.compare,
      answers: finalAnswers
  }, function(err, newPerson){
      if(err){
          console.log(err);
          callback(err, null);
      } else {
          callback(null, newPerson);
      }
});
}

function updateUser(userId, finalAnswers, callback){
    var updatedAnswers = {
        answers: finalAnswers
    };
    Person.findByIdAndUpdate(userId, updatedAnswers, function(err, updatedUser){
        if(err){
            callback(err, null);
        } else {
            callback(null, updatedUser);
        }
    });
}


module.exports = {
    findById: findById,
    createPerson: createPerson,
    updateUser: updateUser,
};