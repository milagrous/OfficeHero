/**
 * Created by movses on 4/14/18.
 */

const mongoose = require('mongoose');

const QuestionScheme = new mongoose.Schema({
    topic: {
        type: String,
    },

    options: [String],
});

module.exports = mongoose.model('Question', QuestionScheme);
