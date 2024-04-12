const express = require('express');
const path = require('path');

const app = express();

//metodo use | express.static é servir aqruivos estáticos
app.use(express.static(path.join(__dirname, 'client2')))



const PORT = 5000;
app.listen(PORT, () =>{
    console.log(`servidor rodando na porta: ${PORT}`)
})
