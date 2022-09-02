const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
 id: {
    type: String,
    require: true
 },
 name: {
    type: String,
    require: true
 },
 age: {
    type: Number,
    require: true
 },
 createdOn: {
    type: Date,
    require: Date.now
 },
});

// NoSql Database
module.exports = mongoose.model("User", userSchema);