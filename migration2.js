/**
 * Created by movses on 4/14/18.
 */

const User = require('./models/User');

let arr = [
    {
        name: 'Մերանգուլյան Վահրամ',
        score: 0,
        questions: []
    },
    {
        name: 'Բուրունսուզյան Գեորգի',
        score: 0,
        questions: []
    },
    {
        name: 'Մերանգուլյան Վահրամ',
        score: 0,
        questions: []
    },
    {
        name: 'Ներսեսյան Գուրգեն',
        score: 0,
        questions: []
    },
    {
        name: 'Բաբայան Լևոն',
        score: 0,
        questions: []
    },
    {
        name: 'Պապյան Արմեն',
        score: 0,
        questions: []
    },
    {
        name: 'Տոնոյան Վահրամ',
        score: 0,
        questions: []
    },
    {
        name: 'Ազատյան Հրանտ',
        score: 0,
        questions: []
    },
    {
        name: 'Հովակիմյան Սամվել',
        score: 0,
        questions: []
    },
    {
        name: 'Մադաթյան Աշոտ',
        score: 0,
        questions: []
    },
    {
        name: 'Մերանգուլյան Վահրամ',
        score: 0,
        questions: []
    },
    {
        name: 'Պետրոսյան Աշոտ',
        score: 0,
        questions: []
    },
    {
        name: 'Անդրիասյան Ալեքսանդր',
        score: 0,
        questions: []
    },
    {
        name: 'Մարկոսյան Մանուշակ',
        score: 0,
        questions: []
    },
    {
        name: 'Ավագյան Նինա',
        score: 0,
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
        questions: []
    },
    {
        name: 'Մարգարյան Կորյուն',
        score: 0,
        questions: []
    },
];


User.insertMany(arr, (err, doc) => {
    if(err) throw err;
    console.log(doc);
});


