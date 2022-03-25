const mongoose = require("mongoose")

const commentsSchema = new mongoose.Schema ({

    title: {type:mongoose.Types.ObjectId, ref:"Itineraries", require:true},
    user:{type:mongoose.Types.ObjectId, ref:"Users", require:true},
    comment: {type:String, require:true},
    date: {type:Number, require:true},

})

const Comment = mongoose.model("Comments",commentsSchema)

module.exports = Comment;
