const porta = 3003

const express = require('express')
const app = express()

//
const bancoDeDados = require('./bancoDeDados')

app.get ('produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})


app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})