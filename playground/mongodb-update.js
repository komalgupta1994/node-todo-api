// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('unable to connect');
    }
    console.log('database connected');
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5acc878a7e68a50ef85bebaf")
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })
    //db.close();
});
