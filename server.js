//Aqui é onde começaremos a criar nossa API

const express = require('express'); //chamando o express
const app = express() //instanciando ele ou seja tornando apto apra ultilizar
const data = require("./data.json") //chamando o json

app.use(express.json()); //estou avisando o express para ultilizar a anotação json

//Verbos HTTP - para nos comunicarmos com os resources (nossas entidades, objetos, etc..)
//GET: receber dados de um resource
//POST: enviar dados os iformaçoes para serem processadas por um resource
//PUT: atualizar os dados de um resource
//DELETE: deletar um resource
//ex: https://localhost:3008/clients - clients sera seu resource no caso

app.get("/pokemons", function(req, res){
    res.json(data); //resposta em json de todos meus clientes(no caso pokemons)
}) //request para pegar a informaçao, response para responder

app.get("/pokemons/:id+-", function(req, res){
    const { id } = req.params; //parametros da requisição para pegar 1 coisa só basicamente
    const pokemon = data.find(pok => pok.id == id); // aqui ele manda busca um pokemon com id igual ao id do get

    res.json(pokemon); // respondendo a requisição feita acima
}) //id para caso eu queira buscar apenas 1 informação ou deletar, etc..

app.post("/pokemons", function(req, res){})

app.put("/pokemons/:id", function(req, res){})

app.delete("/pokemons/:id", function(req, res){})




app.listen(3008, function() { //iniciando nosso servidor na porta 3008
    console.log('Server is running on port: 3008') // passando uma callback(msg) informando a inicializaçao do servidor
})

