const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/defensivos-doencas', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Conectado ao MongoDB!');
});

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:3000`);
});