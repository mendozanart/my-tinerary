require("dotenv").config()
const express = require("express")  //equivalente al import de react pero en node
const app = express()
require("./config/database")

app.use(express.json()) // tramo que pasa datos a una variable

app.listen("4000",()=>console.log("Servidor inicializado en puerto 4000"))

