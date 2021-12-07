const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    techStack:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('studentSchema', studentSchema);