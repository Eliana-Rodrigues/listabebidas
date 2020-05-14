const express= require('express');

const server = express();

server.use(express.json()); 

const bebidas = [
    { bebida: 'Vinho', marca: 'San_German', valor: 18.00 , quantidade:10},
    { bebida: 'Whisky', marca: 'Red_Label', valor: 90.00, quantidade:3},
    { bebida: 'Refrigerante', marca: 'Coca-Cola', valor: 6.00, quantidade:15},
    { bebida: 'Suco', marca: 'Kmais', valor:10.00, quantidade:9},
    { bebida: 'Cerveja', marca: 'Skol', valor:4.00, quantidade:20},
]

server.get('/bebidas', function(request, response) {
    response.json(bebidas);
})

server.post('/bebidas', function(request, response) {
     const {bebida, valor, marca, quantidade} = request.body;

    bebidas.push({bebida, valor, marca, quantidade});
    response.status(204).send();
})

server.put('/bebida/:id', function(request, response) {
    const id = request.params.id;
    const {bebida, valor, marca, quantidade} = request.body; 

    for(let i = 0; i < bebidas.length; i++) {
        if(bebidas [i].bebida == id) {
            bebidas[i].bebida = bebida;
            bebidas[i].valor = valor;
             bebidas[i].marca =marca;
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
