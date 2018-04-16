const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5acdbe75eaf32971ec00ba09';

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('todo', todo);
// });

Todo.findById(id).then((todo) => {
    console.log('todo by id', todo);
}).catch((e) => console.log(e));