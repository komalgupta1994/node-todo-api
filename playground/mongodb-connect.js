// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('unable to connect');
    }
    console.log('database connected');

//     db.collection('Todos').insertOne({
//         text: 'data',
//         completed: false
//     }, (err, result) => {
//         if(err) {
//             return console.log('unable to insert', err);
//         }
//         console.log(JSON.stringify(result.ops));
//     }
// )

    db.collection('Users').insertOne({
        name: 'Komal',
        age: 24,
        location: 'Jaipur'
    }, (err, result) => {
        if(err) {
            return console.log('unable connection', err);
        }
        console.log('connection done', JSON.stringify(result.ops));
    })

    db.close();
});
