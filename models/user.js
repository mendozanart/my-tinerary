const mongoose = require("mongoose")

const userSchema = new mongoose.Schema ({
    email:{type:String,require:true},
    firstname:{type:String,require:true},
    lastname:{type:String,require:false},
    password:{type:String,require:true},
    uniqueText:{type:String,require:true},
    emailVerificado: {type:Boolean,require:true},
    connected: {type:Boolean,require:true},
    from:{type:String,require:true},
    imagenUser:{type:String,require:false}
})


const User = mongoose.model("Users",userSchema)

module.exports = User;