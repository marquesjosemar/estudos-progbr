const express = require('express');
const path = require('path');


const app = express();

//METODO GET

app.use("/meusite", express.static(path.join(__dirname,'get-put-post-delete')))

app.get("/", (req, res)=>{
    res.send("<h1>Hello World from GET</h1>")
})

app.post("/", (req, res)=>{
    res.send("<h1>Hello World from POST</h1>")
})
app.put("/", (req, res)=>{
    res.send("<h1>Hello World from PUT</h1>")
})
app.delete("/", (req, res)=>{
    res.send("<h1>Hello World from DELETE</h1>")
})

const port = 5000;  

app.listen(port, ()=>{
    console.log(`server running on port: ${port}`)
})