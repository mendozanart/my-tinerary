const User = require("../models/user.js")
const bcryptjs = require("bcryptjs")

const usersController = {
    nuevoUsuario:async(req,res)=>{
        console.log(req)
        console.log(res)
        let {email, firstname, lastname, password} = req.body.NuevoUsuario
        console.log(req.body)
        try {
            const usuarioExiste = await User.findOne({email})
            if (usuarioExiste){
                res.json({success:false,response:"User already exist. Please sign in."})
            }
            else{
                const passwordHash = bcryptjs.hashSync(password,10)
                const NewUser = new User({
                    firstname,
                    lastname,
                    email,
                    password: passwordHash,
                    repassword: passwordHash
                })

                await NewUser.save()
                res.json({success:true, response:"User created successfully"})
            }
        } catch (error) {
            res.json({success:false, response: null, error:error})
        }


    } 
}

module.exports = usersController