const Cities = require("../models/cities.js")

const citiesController = {
    ObtenerDatos:async(req,res)=>{
        console.log(req)
        console.log(res)
        let cities
        let error = null
        try {
            cities = await Cities.find()
        } catch (err) {
            error = err
            console.log(error)
        }

        res.json({
            response:error ? "Error" : {cities},
            success:error ? false : true,
            error:error
        })

    } // pide un requrimiento y da una respuesta
}

module.exports = citiesController