/**
 * Created by movses on 4/14/18.
 */

const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
    name: {
        type: String
    },

    score: {
        type: Number
    }
});

module.exports = mongoose.model('User', UserScheme);