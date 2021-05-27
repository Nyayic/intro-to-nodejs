//to create a mongo database we need mongoose, body-parser
const mongoose=require('mongoose')
const bcrypt = require('bcrypt')

//create an instance of a datanvbase
//schema..Tables

const registerSchema = new mongoose.Schema({
    username:{
        type:String,
        required:'Please enter your username',
    },
    email:{
        type:String,
        required: 'Please enter your Email'
    },
    password:{
        type:String,
        required: 'Please enter your password',
    }
});

registerSchema.add({username:{type:String, unique:true, required:'Please User name exists choose another'}})
//pre-save (pre-hook) saving password in encrypted format
registerSchema.pre('save', function(next){
    this.password=bcrypt.hashSync(this.password, 10); //salt
    next()
})