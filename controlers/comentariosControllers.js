const Comments = require("../models/comments.js")



const commentControllers = {

    cargaComentarios:async(req,res)=>{

    let {title, message, user,date} = req.body.dataComments;
    console.log(req.body.dataComments)

    new Comments ({
        title: title,
        user: user,
        mensaje: message,
        date:date
    }).save()

    let comentario

    try {
        comentario = await Comments.find({title:title}).populate("user")
    } catch (error) {
        console.log(error)
    }

    res.json({success:true, response:{comentario}})

},



    obtenerComentarios: async (req, res) => {

        console.log(req.body)
        let id = req.params.id;

        let comentario

    try {
        comentario = await Comments.find({title:id}).populate("user")
    } catch (error) {
        console.log(error)
    }

    res.json({success:true, response:{comentario}})

    },

    borrarComentario: async (req, res) => {

        console.log(req.body)
        let id = req.params.id;
        console.log(id)
        let comentario

    try {
        comentario = await Comments.findOneAndDelete({_id:id})
        console.log(comentario)
    } catch (error) {
        console.log(error)
    }

    res.json({success:true, response:{comentario}, message:"The comment has been deleted."})

    },

    modificarComentario: async (req, res) => {

        console.log(req.body)
        let id = req.params.id;
        console.log(req.body)
        let newComments = {mensaje:req.body.data};

        let comentario

    try {
        comentario = await Comments.findOneAndUpdate({_id:id}, newComments)
    } catch (error) {
        console.log(error)
    }

    res.json({success:true, response:{comentario}, message:"The comment has been modified."})

    }




}

module.exports = commentControllers