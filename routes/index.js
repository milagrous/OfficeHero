const express = require('express');
const router = express.Router();
const Question = require('../models/Question');
const User = require('../models/User');

/* GET home page. */
router.get('/', (req, res) => {
    res('index');
});

router.get('/questions', (req, res) => {

    let uid = req.cookies._id;
    User.findById(uid, (err, user) => {
        if(err) throw err;
        if (user.questions.length === 0) {
            Question.find({}).lean().exec((err, questions) => {
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
        } else {
            res.send({status: 'cheating'});
        }
    });
});

router.post('/questions', (req, res) => {
    let qid = req.body._id;
    let uid = req.cookies._id;
    let option = req.body.option;

    let score = 0;
    if (option === 0) {
        score = score + 2;
    } else if (option === 1){
        score = score + 4;
    } else if (score === 2) {
        score = score + 3;
    }

    User.findById(uid, (err, user) => {
        if (err) throw err;
        if (user.questions.indexOf(qid) === -1) {
            if (!user.score) {
                user.score = score;
            } else {
                user.score = user.score + score;
            }
            user.questions.push(qid);
            user.save( (err, updatedUser) => {
                if (err) return handleError(err);

                User.find({}).lean().exec((err, users) => {
                    if (err) throw err;
                    if (!users[3].heroScore) {
                        users[3].heroScore = score;
                    } else {
                        users[3].heroScore = users[3].heroScore+ score;
                    }

                    User.findByIdAndUpdate(users[3]._id, { heroScore: users[3].heroScore}, (err, doc) => {
                       if(err) throw err;
                       res.send(doc);
                    });
                });

            });


        }
    });
});

router.get('/hero', (req, res) => {
    User.find({}).lean().exec((err, users) => {
        if (err) throw err;
        //
        // let coef = users.length;
        // let index = Math.floor(Math.random() * coef);

        res.send(users[3]);
    });
});

router.get('/heros', (req, res) => {
    User.find({ heroScore: {$gt: 0}}).lean().exec((err, users) => {
        if (err) throw err;
        res.send(users);
    });
});


router.get('/user', (req, res) => {
    User.find({}).lean().exec((err, users) => {
        if (err) throw err;
        res.send(users[users.length / 2]);
    });
});

router.get('/users', (req, res) => {
    User.find({}).lean().exec((err, users) => {
        if (err) throw err;
        res.send(users);
    });
});


module.exports = router;
