// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('unable to connect');
    }
    console.log('database connected');

    db.collection('Todos').find().count().then((docs) => {
        console.log(`Total count: ${docs}`);
    }, (err) => {
        console.log('unable to fetch', err);
    })

    //db.close();
});
