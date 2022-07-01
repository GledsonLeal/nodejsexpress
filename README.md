criar o package.json: npm init
    criar o script para inicialização: "start": "nodemon index.js"

instalar o nodemon:
    npm install -g nodemon # or using yarn: yarn global add nodemon

instalar o express:
1 - instalar dentro da pasta do projeto com o npm(gerenciador de pacotes)
2 - $ npm install express --save



https://expressjs.com/


const express = require("express")// framework para trabalhar com servidor web. Framework orientado a rotas
// diferença entre var e const: a const não deixa sobrescrever a variável

const app = express()// instância do express.

// rota é um caminho para a minha aplicação
app.get("/", function(req, res){
    res.send("Rota principal")
    //a função sendFile() irá apresentar uma página HTML
})
app.get("/rota", function(req, res){
    res.send("Isso é uma rota")
})

// a função listen(), do express, abre um servidor web. Listen é escutando na porta tal....
//função de call back: executada sempre que um evento acontece
app.listen(8084, function(){// essa função deve ser a ultima
    console.log("Servidor rodando na URL http://localhost:8084")
})
