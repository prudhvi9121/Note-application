const mongoose = require('mongoose');

const noteschema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    content:{
        type:String,
        required:true
    }
})

const Note = mongoose.model('Note',noteschema);
module.exports=Note;