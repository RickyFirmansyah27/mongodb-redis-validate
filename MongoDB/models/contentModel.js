const mongoose = require("mongoose");

const Content = mongoose.Schema({
    judul: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Contents', Content);