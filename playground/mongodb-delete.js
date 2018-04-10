// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('unable to connect');
    }
    console.log('database connected');
    //deleteMany
    // db.collection('Todos').deleteMany({text:'calling'}).then((result) => {
    //     console.log(result);
    // })
    //deleteOne
    // db.collection('Todos').deleteOne({text: 'calling'}).then((result) => {
    //     console.log('delete one', result);
    // })
    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log('find one and delete', result);
    })
    //db.close();
});
