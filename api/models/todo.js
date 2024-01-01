const mongoose = require('mongoose');
const { touchProps } = require('react-native-web/dist/cjs/modules/forwardedProps');


const TodoSchema =  new mongoose.Schema({
    title:{
        type: String, 
        required: true 
    },
    status:{
        type: String, 
        enum:["pending", "completed"],
        default:"pending"

    },
    category:{
        type: String, 
        required: true
    },
    dueDate:{
        type: String, 
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
});


const Todo =  mongoose.model('Todo', TodoSchema);
module.exports =  Todo; 