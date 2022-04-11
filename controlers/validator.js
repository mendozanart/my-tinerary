const joi = require ("joi")

const validator = (req,res,next) => {

    console.log(req.body.NuevoUsuario)

    const schema = joi.object({
        email:joi.string().email({minDomainSegments:2}).trim().required().messages({
            "string.email":"Invalid format",
        }),

        firstname:joi.string().max(40).min(2).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({
            "string.min":"The name must contain at least 2 characters",
            "string.empty":"You must fill in the field"
        }),

        lastname:joi.string().max(20).min(2).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({
            "string.min":"The last name must contain at least 2 characters",
            "string.empty":"You must fill in the field"
        }),

        password: joi.string().max(50).min(6).trim().pattern(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/).required().messages({
            "string.pattern.base":"The password must contain at least one uppercase, lowercase and a number",
            "string.min": "The password must have at least 6 characters",
            "string.pattern": "The password must be alphanumeric"
        }),

        from: joi.string()




    })

    const validation = schema.validate(req.body.NuevoUsuario,{abortEarly:false})
    if (validation.error){
        return res.json({
            success:"falseval", response:validation
        })
    }

    next()
}

module.exports = validator