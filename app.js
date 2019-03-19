const express = require("express")
const app = express()
const port=process.env.PORT || 3000;
const morgan=require("morgan")
const helmet=require("helmet")

app.use(express.static("static"))

//Log HTTP requests
app.use(morgan("combined"))
//Enhance security using helmet
app.use(helmet())


app.get("/",(req,res)=>{
    res.sendFile(`${__dirname}/index.html`)
})

app.listen(port, ()=>console.log("listening at port "+port))