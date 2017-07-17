var mongoose                = require("mongoose"),
    passportLocalMongoose   = require("passport-local-mongoose");
const Schema                = mongoose.Schema;

var personSchema = new Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    compare: String,
    answers: Object,
    created: {type: Date, default: Date.now}
});

personSchema.plugin(passportLocalMongoose)

module.exports =  mongoose.model("Person", personSchema);