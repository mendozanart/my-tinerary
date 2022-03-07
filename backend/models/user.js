const mongoose = require("mongoose")

const userSchema = new mongoose.Schema ({
    email:{type:String,require:true},
    firstname:{type:String,require:true},
    lastname:{type:String,require:true},
    password:{type:String,require:true},
    repassword:{type:String,require:true},
    uniqueText:{type:String,require:true},
    emailVerificado: {type:Boolean,require:true},
})

const User = mongoose.model("Users",userSchema)

module.exports = User;