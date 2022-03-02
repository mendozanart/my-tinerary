const Router = require("express").Router();
const citiesController = require("../controlers/datosControllers")
const itinerariesController = require ("../controlers/itinerariosControllers.js")
const usersControllers = require("../controlers/usersControllers.js")
const validator = require("../controlers/validator.js")
const {ObtenerDatos} = citiesController //destructuracion del controlador
const {ObtenerItinerarios} = itinerariesController
const {nuevoUsuario} = usersControllers

Router.route("/datos") //url de consulta
.get(ObtenerDatos)

Router.route("/itinerarios/:city") //url de consulta
.get(ObtenerItinerarios)

Router.route("/usuarios") //url de consulta
.post(validator, nuevoUsuario)

module.exports = Router