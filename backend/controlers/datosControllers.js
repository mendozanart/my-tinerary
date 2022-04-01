const Cities = require("../models/cities.js")
const Itineraries = require("../models/itineraries.js")

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

    },
    
    
    likeDislike: async (req,res) => {
        const id = req.params.id;
        const user = req.body.user
        let itineraries

        try {
            itineraries = await Itineraries.findOne({_id:id})
            if(itineraries.likes.includes(user)){
                Itineraries.findByIdAndUpdate({_id:id},{$pull:{likes:user}}, {new:true})
                .then(response=>res.json({success:true, response:response.likes }))
                .catch(error=>console.log(error))
            }else{
                Itineraries.findByIdAndUpdate({_id:id},{$push:{likes:user}}, {new:true})
                .then(response=>res.json({success:true, response:response.likes }))
                .catch(error=>console.log(error))
            }
        } catch (err) {
            let error = err
            res.json({success:false, response:error})
        }


    },// pide un requrimiento y da una respuesta
}

module.exports = citiesController