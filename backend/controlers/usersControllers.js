const nodemailer = require("nodemailer")
const crypto = require("crypto")
const User = require("../models/user.js")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")


async function sendEmail(email, uniqueText){

    const transporter = nodemailer.createTransport({

        host:"smtp.gmail.com", 
        port:465,
        secure:true,
        auth:{
            user:"mytineraryemail@gmail.com",
            pass:process.env.NODEMAILER
        }
    })

    const sender = "mytineraryemail@gmail.com"
    const mailOptions = {
        from: sender,
        to: email,
        subject: "User verification email",
        html: `Click <a href=http://localhost:4000/api/verify/${uniqueText}>here</a> to verify your email.`
    }

    await transporter.sendMail(mailOptions,function(error,response){
        if (error) {
            console.log(error)
        } else {
            console.log ("Message sent")
        }
    })
}

const usersController = {

    verifyEmail:async(req,res)=>{
        const {uniqueText} = req.params
        const user = await User.findOne({uniqueText:uniqueText})
        if (user) {
            user.emailVerificado =  true
            await user.save()
            res.redirect("http://localhost:3000/conexion")
        } else{
            res.json({success:false, response:"Your email could not be verified"})
        }
    },
    nuevoUsuario:async(req,res)=>{
        console.log(req)
        console.log(res)
        let {email, firstname, lastname, password, from} = req.body.NuevoUsuario
        console.log(req.body)
        try {
            const usuarioExiste = await User.findOne({email})
            if (usuarioExiste){
                if(from!=="signup") {
                    const passwordHash = bcryptjs.hashSync(password,10)
                    usuarioExiste.password = passwordHash
                    usuarioExiste.emailVerificado = true
                    usuarioExiste.from = from
                    usuarioExiste.connected = false
                    usuarioExiste.save()
                    res.json({success:true, response:"We update your signup so that you can do it with " + from})
                } else {
                    res.json({success:false, response:"Username is already in use"})
                }
            }
            else{
                const uniqueText = crypto.randomBytes(15).toString("hex") // 15 caracteres hexagecimal
                const emailVerificado = false
                const passwordHash = bcryptjs.hashSync(password,10)
                const NewUser = new User({
                    firstname,
                    lastname,
                    email,
                    password: passwordHash,
                    uniqueText,
                    emailVerificado,
                    connected:false,
                    from,
                })

                if(from!=="signup"){
                    NewUser.emailVerificado = true
                    NewUser.from = from
                    NewUser.connected = false
                    await NewUser.save()
                    res.json({success:true, data:{NewUser}, response:"Congratulations, your user has been created with" + from})
                }else{
                    NewUser.emailVerificado = false
                    NewUser.from = from
                    NewUser.connected = false
                    await NewUser.save()
                    await sendEmail(email, uniqueText)
                    res.json({success:true, response:"We send you an email to verify your email"})
                }


            }
            


        } 
        
        catch (error) {
            res.json({success:"falseue", response: null, error:error})
        }},

        accesoUsuario: async (req,res) =>{

            const {email,password} = req.body.userData

            try{
                const usuario = await User.findOne({email})
                
                if (!usuario) {
                    res.json({success:false,from:"controller",error:"Wrong username or password"})
                }else {
                    if(usuario.emailVerificado){
                        let passwordCoincide = bcryptjs.compareSync(password,usuario.password)
                        if (passwordCoincide){    
                            const datosUser = {
                                firstname : usuario.firstname,
                                lastname : usuario.lastname,
                                email : usuario.email,
                                id : usuario._id,
                            }
                        usuario.connected = true
                        await usuario.save()
                        const token = jwt.sign({...datosUser}, process.env.SECRETKEY,{expiresIn:60*60*24})
                        res.json({success:true,from:"controller",response:{token,datosUser}})
                        }
                        else {res.json({success:false, from:"controller", error:"Wrong username or password"})}
                    }
                    else {res.json({success:false, from:"controller", error:"Please check your email to validate it"})}
                }
            }
            catch(error) {console.log(error);res.json({success: false, response:null, error:error})}
        },

        cerrarSesion: async (req,res) => {
            const email = req.body.email
            console.log (req.body.email)
            const user = await User.findOne({email})
            user.connected = false
            await user.save()
            res.json({success:true, response: "Closed session"})
        },


        verificarToken: async (req,res) =>{
            if (!req.error) {
                res.json({success:true, 
                    respuesta: {
                    datosUser:{
                    firstname: req.user.firstname,
                    lastname: req.user.lastname,
                    email: req.user.email,
                    id: req.user.id}}, response:"Welcome back " + req.user.firstname})
            }else{
                res.json({success:false, response:"Please Signin Again."})
            }
        }


    }
    



    

module.exports = usersController