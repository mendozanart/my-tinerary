const mongoose = require("mongoose")

const citiesSchema = new mongoose.Schema ({
    city:{type:String,require:true},
    country:{type:String,require:true},
    //currency:{type:Number,require:true},
    //language:{type:String,require:true},
    //continent:{type:String,require:true},
    //region:{type:String,require:true},
    //img:{type:String,require:true},
})

const City = mongoose.model("Cities",citiesSchema)

module.exports = City;