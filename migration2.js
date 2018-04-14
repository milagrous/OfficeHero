/**
 * Created by movses on 4/14/18.
 */

const User = require('./models/User');

User.insertMany((err, doc) => {
    if(err) throw err;
    console.log(doc);
});

let arr = [
    {
        name: 'Մերանգուլյան Վահրամ',
        score: 0
    },
    {
        name: 'Բուրունսուզյան Գեորգի',
        score: 0
    },
    {
        name: 'Մերանգուլյան Վահրամ',
        score: 0
    },
    {
        name: 'Ներսեսյան Գուրգեն',
        score: 0
    },
    {
        name: 'Բաբայան Լևոն',
        score: 0
    },
    {
        name: 'Պապյան Արմեն',
        score: 0
    },
    {
        name: 'Տոնոյան Վահրամ',
        score: 0
    },
    {
        name: 'Ազատյան Հրանտ',
        score: 0
    },
    {
        name: 'Հովակիմյան Սամվել',
        score: 0
    },
    {
        name: 'Մադաթյան Աշոտ',
        score: 0
    },
    {
        name: 'Մերանգուլյան Վահրամ',
        score: 0
    },
    {
        name: 'Պետրոսյան Աշոտ',
        score: 0
    },
    {
        name: 'Անդրիասյան Ալեքսանդր',
        score: 0
    },
    {
        name: 'Մարկոսյան Մանուշակ',
        score: 0
    },
    {
        name: 'Ավագյան Նինա',
        score: 0
    },
    {
        name: 'Արևշատյան Գարիկ',
        score: 0
    },
    {
        name: 'Մկրտչյան Վահե',
        score: 0
    },
    {
        name: 'Մարգարյան Կորյուն',
        score: 0
    },

];


User.insertMany(arr, (err, doc) => {
    if(err) throw err;
    console.log(doc);
});


