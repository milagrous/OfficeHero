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

const Question = require('./models/Question');

let arr = [
  {
    topic: 'Favorite sport',
    options: ['Tennis', 'Chess', 'Football']
  },

  {
    topic: 'Favorite weekend activity',
    options: ['Hiking/Camping', 'Skiing/winter sports', 'Sleeping on the couch']
  },

  {
    topic: 'Favorite food',
    options: ['Fast food', 'Homemade food', 'Pizza!']
  },

  {
    topic: 'Transportation method preference',
    options: ['Car/Taxi/Public transportation', 'Bicycle', 'Own foot!']
  },

  {
    topic: 'Does he/she works overtime',
    options: ['No way!', 'Sometimes', 'Sleeps in the office, pays a rent for it!']
  },

  {
    topic: 'Favorite drink',
    options: ['Spirits (vodka, gin, brandy, cocktails)', 'Soda (Coca Cola, Pepsi)', 'Water (Aparan, Noy, tap water)']
  },

  {
    topic: 'Favorite movie genre',
    options: ['Drama', 'Action/Sci-fi', 'Soap operas, mostly Indian']
  },

  {
    topic: 'Favorite music genre',
    options: ['Rock', 'Pop', 'Tatul and Hayko from Spitak, sometimes Armenchik']
  },

  {
    topic: 'Favorite outfit',
    options: ['Jeans and t-shirt', 'Suit&tie guy', 'Absolute lack of good taste in fashion']
  },

  {
    topic: 'Goes to vacation to',
    options: ['Barcelona/Paris/Dubai', 'Tbilisi/Batumi/Kobuleti', 'Parent\'s village']
  },

  {
    topic: 'Favorite musical instrument',
    options: ['Guitar', 'Violin', 'Table or any other flat surface']
  },

  {
    topic: 'Childhood dream',
    options: ['Become an astronaut', 'Become a famous actor/actress', 'Become a truck driver']
  }
];

Question.insertMany(arr, (err, doc) => {
  if(err) throw err;
  console.log(doc);
});

const User = require('./models/User');

arr = [
    {
        name: 'Vahram Merangulyan',
        score: 0,
        HeroScore: 0,
        questions: []
    },
    {
        name: 'Georgi Burunsuzyan',
        score: 0,
        heroScore: 0,
        questions: []
    },
    {
        name: 'Gurgen Nersesyan',
        score: 0,
        heroScore: 0,
        questions: []
    },
    {
        name: 'Levon Babayan',
        score: 0,
        heroScore: 0,
        questions: []
    },
    {
        name: 'Armen Papyan',
        score: 0,
        heroScore: 0,
        questions: []
    },
    {
        name: 'Vahram Tonoyan',
        score: 0,
        heroScore: 0,
        questions: []
    },
    {
        name: 'Hrant Azatyan',
        score: 0,
        heroScore: 0,
        questions: []
    },
    {
        name: 'Samvel Hovakimyan',
        score: 0,
        heroScore: 0,
        questions: []
    },
    {
        name: 'Ashot Madatyan',
        score: 0,
        heroScore: 0,
        questions: []
    },
    {
        name: 'Ashot Petrosyan',
        score: 0,
        heroScore: 0,
        questions: []
    },
    {
        name: 'Mikayel Aghasyan',
        score: 0,
        heroScore: 0,
        questions: []
    },
    {
        name: 'Manushak Markosyan',
        score: 0,
        heroScore: 0,
        questions: []
    },
    {
        name: 'Garik Arevshatyan',
        score: 0,
        heroScore: 0,
        questions: []
    },
    {
        name: 'Vahe Mkrtchyan',
        score: 0,
        heroScore: 0,
        questions: []
    },
    {
        name: 'Armine Marukhyan',
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
        name: 'Koryun Margaryan',
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
