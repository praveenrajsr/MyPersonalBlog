let mongoose = require('mongoose');
let savedata = mongoose.Schema;

let saveSchema = new savedata({
    title: String,
    content: String,
    date: Date,
    image: String
});

let compile = mongoose.model('data', saveSchema);

module.exports = compile;
