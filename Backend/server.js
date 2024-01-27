const express = require("express");
const port = 4000;
const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.json({code: "client", message: "server is up and running"}).status(200)
})

app.listen(port, ()=>{
    console.log("server is up and running!")
})