const Router = require("express").Router();
const citiesController = require("../controlers/datosControllers")
const {ObtenerDatos} = citiesController //destructuracion del controlador

Router.route("/datos") //url de consulta
.get(ObtenerDatos)

module.exports = Router