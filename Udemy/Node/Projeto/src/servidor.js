const porta = 3003

const express = require('express')
const app = express()


app.get('/produtos', (req, res, next) =>{
    res.send({nome: 'Notebook', preco: 1234.45}) // converter para Json
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}` )
})