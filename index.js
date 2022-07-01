const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded())
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(__dirname+ "/views/index.html")
}) 
app.get('/outrapagina', (req, res) => {
    res.send('<h1>Outra Página!</h1>')
})
app.get('/parametro/:nome', (req, res)=>{ 
    const name = req.params.nome
    res.send(`<h1>Olá ${name}</h1>`)
})
app.get('/formulario', (req, res) => {
    res.sendFile(__dirname+ "/views/formulario.html")
})
app.post('/listarcadastro',(req, res)=>{
    const nome = req.body.nome
    const sobrenome = req.body.sobrenome
    const email = req.body.email
    res.send(`Nome completo: ${nome} ${sobrenome} E-mail: ${email}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})