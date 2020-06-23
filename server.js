const express= require('express');
const cors = require('cors');
const server = express();

server.use(cors());
server.use(express.json()); 

const bebidas = [
    { bebida:'Vodka', marca: 'Balalaika', valor: 17.04 , volume: 1000, quantidade:2},
    { bebida: 'Whisky', marca: 'Red_Label', valor: 90.00, volume: 750,quantidade:3},
    { bebida: 'Refrigerante', marca: 'Coca-Cola', valor: 7.50, volume: 2000,quantidade:12},
    { bebida: 'Suco', marca: 'Kmais', valor:10.90, volume: 900,quantidade:9},
    { bebida: 'Cerveja', marca: 'Skol', valor:4.00, volume: 550 ,quantidade:24},
    { bebida: 'Cachaça', marca: 'Corote', valor:4.00, volume: 500, quantidade:15},
]

server.get('/bebida', function(request, response) {
    response.json(bebidas);
})

server.post('/bebida', function(request, response) {
     const {bebida, valor, marca, volume, quantidade} = request.body;

    bebidas.push({bebida, valor, marca, volume, quantidade});
    response.status(204).send();
})

server.put('/bebida/:id', function(request, response) {
    const id = request.params.id;
    const {bebida, valor, marca, volume, quantidade} = request.body; 

    for(let i = 0; i < bebidas.length; i++) {
        if(bebidas [i].bebida == id) {
            bebidas[i].bebida = bebida;
            bebidas[i].valor = valor;
            bebidas[i].marca = marca;
             bebidas[i].volume = volume;
            bebidas[i].quantidade = quantidade;

            break;  
        }
    }

    return response.status(204).send();
}) 

server.delete('/bebida/:id', function(request, response) {

    const id = request.params.id

    for(let i = 0; i < bebidas.length; i++) {
        if(bebidas [i].bebida == id) {
            bebidas.splice(i, 1);
            break;
        }
    }

    return response.status(204).send();
})

server.listen(process.env.PORT || 3000);
