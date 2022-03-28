const nodemailer = require("nodemailer")
const crypto = require("crypto")
const Comments = require("../models/comments.js")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")


const commentControllers = {

    cargaComentarios:async(req,res)=>{

    let {itinerary, message, user} = req.body.dataComments;
    console.log(req.body.dataComments)

    new Comments ({
        itinerario: itinerary,
        user: user,
        mensaje: message,
    }).save()

    let comentario

    try {
        comentario = await Comments.find({title:itinerary}).populate("user")
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

    }


    


}

module.exports = commentControllers