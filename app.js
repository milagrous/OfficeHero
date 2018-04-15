const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fs = require('fs');

const mongoose = require('mongoose');
const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bin')));


app.use('/v1/api', indexRouter);

let index;
fs.readFile( __dirname + '/public/' + "index.html", 'utf8', (err, data) => {
    index = data;
});

// home page
app.get('/', (req, res) => {
    res.end(index);
});


mongoose.connect("mongodb://localhost:27017/hero");
mongoose.connection.on('error', (err) => {
        console.error('MongoDB connection error: ' + err);
        process.exit(-1);
    }
);

/**
 * Created by movses on 4/14/18.
 */

const User = require('./models/User');

let arr = [
    {
        name: 'Մերանգուլյան Վահրամ',
        score: 0,
        heroScore: 0,
        questions: []
    },
    {
        name: 'Բուրունսուզյան Գեորգի',
        score: 0,
        HeroScore: 0,
        questions: []
    },
    {
        name: 'Մերանգուլյան Վահրամ',
        score: 0,
        heroScore: 0,
        questions: []
    },
    {
        name: 'Ներսեսյան Գուրգեն',
        score: 0,
        heroScore: 0,
        questions: []
    },
    {
        name: 'Բաբայան Լևոն',
        score: 0,
        heroScore: 0,
        questions: []
    },
    {
        name: 'Պապյան Արմեն',
        score: 0,
        heroScore: 0,
        questions: []
    },
    {
        name: 'Տոնոյան Վահրամ',
        score: 0,
        heroScore: 0,
        questions: []
    },
    {
        name: 'Ազատյան Հրանտ',
        score: 0,
        heroScore: 0,
        questions: []
    },
    {
        name: 'Հովակիմյան Սամվել',
        score: 0,
        heroScore: 0,
        questions: []
    },
    {
        name: 'Մադաթյան Աշոտ',
        score: 0,
        heroScore: 0,
        questions: []
    },
    {
        name: 'Մերանգուլյան Վահրամ',
        score: 0,
        heroScore: 0,
        questions: []
    },
    {
        name: 'Պետրոսյան Աշոտ',
        score: 0,
        heroScore: 0,
        questions: []
    },
    {
        name: 'Անդրիասյան Ալեքսանդր',
        score: 0,
        heroScore: 0,
        questions: []
    },
    {
        name: 'Մարկոսյան Մանուշակ',
        score: 0,
        heroScore: 0,
        questions: []
    },
    {
        name: 'Ավագյան Նինա',
        score: 0,
        heroScore: 0,
        questions: []
    },
    {
        name: 'Արևշատյան Գարիկ',
        score: 0,
        questions: []
    },
    {
        name: 'Մկրտչյան Վահե',
        score: 0,
        heroScore: 0,
        questions: []
    },
    {
        name: 'Մարգարյան Կորյուն',
        score: 0,
        heroScore: 0,
        questions: []
    },
];


User.insertMany(arr, (err, doc) => {
    if(err) throw err;
    console.log(doc);
});




app.listen(process.env.PORT || 3000, () => {console.log('listening port 3000')});
