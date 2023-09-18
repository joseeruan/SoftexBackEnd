const express = require('express');

const app = express();
const porta = 3333; 

app.listen(porta, function(){   
    console.log("Servidor rolando na porta", + porta)

});

app.get('/Saudacao', (request, response) =>  {
    return response.send("Olá, Mundo!")
})


