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
        title: itinerary,
        user: user,
        comment: comment,
    })

}

}

module.exports = commentControllers