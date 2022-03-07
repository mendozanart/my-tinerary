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
        let {email, firstname, lastname, password} = req.body.NuevoUsuario
        console.log(req.body)
        try {
            const usuarioExiste = await User.findOne({email})
            if (usuarioExiste){
                res.json({success:"falseue",response:"User already exist. Please sign in."})
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
                    repassword: passwordHash,
                    uniqueText,
                    emailVerificado,
                })

                if (!emailVerificado){

                    await NewUser.save()
                    await sendEmail(email, uniqueText) // experamos creacion de usuario nuevo
                    res.json({success:"trueue", response:"We send you an email to verify your email"})
                }

            }


        } catch (error) {
            res.json({success:"falseue", response: null, error:error})
        }

        accesoUsuario: async (req,res) =>{

            const {email,password} = req.body.userData

            try{
                const usuario = await User.findOne({email})
                
                if (!usuario) {
                    res.jason({success:false,from:"controller",error:"Wrong username or password"})
                }else {
                    if(usuario.emailVerificado){
                        let passwordCoincide = bcryptjs.compareSync(password,usuario.password)
                        if (passwordCoincide){
                            const token = jwt.sign({...usuario}, process.env.SECRETKEY)
                            const datosUser = {
                                email : usuario.email,
                                firstname : usuario.firstname,
                                lastname : usuario.lastname,
                            }
                        await usuario.save()
                        res.json({success:true,from:"controller",response:{token,datosUser}})
                        }
                        else {res.json({success:false, from:"controller", error:"Wrong username or password"})}
                    }
                    else {res.json({success:false, from:"controller", error:"Please check your email to validate it"})}
                }
            }
            catch(error) {console.log(error);res.json({success: false, response:null, error:error}))}
        }
    }


    }


module.exports = usersController