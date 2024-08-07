const express = require('express');
const app = express();
const porta = 443;

app.get('/', (req, res) => {
  res.send('Olá, Mundo! Estou usando o express!');
})

app.listen(porta, () => {console.log('App rodando')});
