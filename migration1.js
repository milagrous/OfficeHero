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