var mongoose                = require("mongoose"),
    passportLocalMongoose   = require("passport-local-mongoose");
const Schema                = mongoose.Schema;

var personSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    compare: String,
    answers: Object,
    created: {type: Date, default: Date.now}
});

personSchema.plugin(passportLocalMongoose)

var Person = mongoose.model("Person", personSchema);

module.exports =  Person;