const express = require('express');
const router = express.Router();
const Questions = require('../models/Question');
const User = require('../models/User');

/* GET home page. */
router.get('/', (req, res) => {
    res('index');
});

router.get('/questions', (req, res) => {
    Questions.find({}).lean().exec((err, questions) => {
        if (err) throw err;
        let data = [];

        for (let i=0; i<5; i++) {
            let coef = questions.length;
            let index = Math.floor(Math.random() * coef);
            let question = questions.splice(index, 1);
            data.push(question);
        }

        res.send(data);
    });
});

router.get('/user', (req, res) => {

    User.find({}).lean().exec((err, users) => {
        if (err) throw err;

        let coef = users.length;
        let index = Math.floor(Math.random() * coef);

        res.send(users[index]);
    });
});

router.get('/users', (req, res) => {

    User.find({}).lean().exec((err, users) => {
        if (err) throw err;
        res.send(users);
    });
});


module.exports = router;
