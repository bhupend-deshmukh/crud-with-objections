const express = require("express")
const app = express()
const Router = require("./routes/router")

const port = 4040

app.use(express.json())
app.use(Router)

app.listen(port,()=>{
    console.log("server is running")
})