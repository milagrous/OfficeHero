const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fs = require('fs');

const mongoose = require('mongoose');



const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bin')));


app.use('/v1/api', indexRouter);
app.use('/v1/api/users', usersRouter);

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


app.listen(process.env.PORT || 3000, () => {console.log('listening port 3000')});