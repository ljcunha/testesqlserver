const express = require('express');
const app = express();
var consulta = require('./connectionFactory');

app.get('/', (req,res) => res.send(consulta("Select * from Components")));

app.listen(3000,function(){
    console.log("Servidor online...");
    console.log();
});