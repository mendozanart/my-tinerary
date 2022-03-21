const Router = require("express").Router();
const citiesController = require("../controlers/datosControllers")
const itinerariesController = require ("../controlers/itinerariosControllers.js")
const comentariosController = require ("../controlers/comentariosControllers.js")
const usersControllers = require("../controlers/usersControllers.js")
const validator = require("../controlers/validator.js")
const {ObtenerDatos} = citiesController //destructuracion del controlador
const {cargaComentarios} = comentariosController
const {ObtenerItinerarios} = itinerariesController
const {nuevoUsuario, verifyEmail, accesoUsuario, cerrarSesion } = usersControllers

Router.route("/datos") //url de consulta
.get(ObtenerDatos)

Router.route("/itinerarios/:city") //url de consulta
.get(ObtenerItinerarios)

Router.route("/usuarios") //url de consulta
.post(validator, nuevoUsuario)

Router.route("/verify/:uniqueText") //url de consulta
.get(verifyEmail)

Router.route("/signIn") //url de consulta
.post(accesoUsuario)

Router.route("/signOut") //url de consulta
.post(cerrarSesion)

Router.route("/comentarios") //url de consulta
.post(cargaComentarios)


module.exports = Router