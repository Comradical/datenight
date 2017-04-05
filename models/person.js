var mongoose        = require("mongoose");
const Schema        = mongoose.Schema;

var personSchema = new Schema({
    firstname: String,
    lastname: String,
    compare: String,
    answers: Object,
    created: {type: Date, default: Date.now}
});

var Person = mongoose.model("Person", personSchema);

module.exports =  Person;