const mongoose = require("mongoose")

const itinerariesSchema = new mongoose.Schema ({

    city:{type:String,require:true},    
    //title:{type:String},
    //description:{type:String},
    //schedule:{type:Number},
    //price:{type:Number},
    //img: [{
    //    type:String
    //}],
    likes:{type:Array}
})

const Itinerary = mongoose.model("Itineraries",itinerariesSchema)

module.exports = Itinerary;