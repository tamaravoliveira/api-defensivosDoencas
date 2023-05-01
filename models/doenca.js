const mongoose = require('mongoose');

const doencaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  sintomas: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model('Doenca', doencaSchema);