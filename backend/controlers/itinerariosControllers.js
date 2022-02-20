const Itineraries = require("../models/itineraries.js")

const itinerariesController = {
    ObtenerItinerarios:async(req,res)=>{
        console.log(req)
        console.log(res)
        let itineraries
        let error = null
        try {
            itineraries = await Itineraries.find()
        } catch (err) {
            error = err
            console.log(error)
        }

        res.json({
            response:error ? "Error" : {itineraries},
            success:error ? false : true,
            error:error
        })

    } // pide un requrimiento y da una respuesta
}

module.exports = itinerariesController