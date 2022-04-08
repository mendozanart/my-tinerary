const mongoose = require("mongoose")

const commentsSchema = new mongoose.Schema ({

    title: {type:mongoose.Types.ObjectId, ref:"Itineraries", require:true},
    user:{type:mongoose.Types.ObjectId, ref:"Users", require:true},
    mensaje: {type:String, require:true},
    date: {type:String, require:true},
})

const Comment = mongoose.model("Comments",commentsSchema)

module.exports = Comment;

