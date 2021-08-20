const express = require('express');
const app = express();

const routes = require('./routes');

app.use(routes);

app.listen(process.env.PORT || 3000, () => console.log("Servidor Rodando!"));