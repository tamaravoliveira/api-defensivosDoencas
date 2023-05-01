const mongoose = require('mongoose');

const defensivoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  fabricante: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Defensivo', defensivoSchema);