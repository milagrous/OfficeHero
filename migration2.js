/**
 * Created by movses on 4/14/18.
 */

const User = require('./models/User');

let arr = [
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