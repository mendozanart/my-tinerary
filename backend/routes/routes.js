const Router = require("express").Router();
const citiesController = require("../controlers/datosControllers")
const itinerariesController = require ("../controlers/itinerariosControllers.js")
const {ObtenerDatos} = citiesController //destructuracion del controlador
const {ObtenerItinerarios} = itinerariesController

Router.route("/datos") //url de consulta
.get(ObtenerDatos)

Router.route("/itinerarios/:city") //url de consulta
.get(ObtenerItinerarios)

module.exports = Router