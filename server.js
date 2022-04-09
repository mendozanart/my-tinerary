require("dotenv").config()
const express = require("express")  //equivalente al import de react pero en node
const cors = require ("cors")
const Router = require("./routes/routes")
const passport = require("passport")
const app = express()
require("./config/database")
const path = require("path")

/* middle words */
const HOST= process.env.HOST||"0.0.0.0"
const PORT= process.env.PORT||4000
app.use(cors())
app.use(express.json()) // tramo que pasa datos a una variable
app.use(passport.initialize())
app.use("/api", Router)

if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname+"/client/build/index.html"))
    })
}
app.listen(PORT,HOST,()=>console.log("Servidor inicializado en puerto " + PORT))

