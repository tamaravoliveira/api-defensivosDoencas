const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Defensivo = require('./models/defensivo');
const Doenca = require('./models/doenca');

//Rotas para defensivos
//Retorna todos os defensivos
router.get('/defensivos', async (req, res) => {
  const defensivos = await Defensivo.find();
  res.send(defensivos);
});

//Retorna um defensivo específico com o ID fornecido
router.get('/defensivos/:id', async (req, res) => {
  const defensivo = await Defensivo.findById(req.params.id);
  res.send(defensivo);
});

//Adiciona um novo defensivo
router.post('/defensivos', async (req, res) => {
  const { nome, descricao, fabricante, preco } = req.body;

  const defensivo = new Defensivo({
    nome,
    descricao,
    fabricante,
    preco,
  });

  await defensivo.save();
  res.send(defensivo);
});

//Atualiza um defensivo existente com o ID fornecido
router.put('/defensivos/:id', async (req, res) => {
  const defensivo = await Defensivo.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.send(defensivo);
});

//Exclui um defensivo existente com o ID fornecido
router.delete('/defensivos/:id', async (req, res) => {
  await Defensivo.findByIdAndDelete(req.params.id);
  res.send({ message: 'Defensivo removido com sucesso' });
});

//Rotas para doencas

//Retorna todos as doenças
router.get('/doencas', async (req, res) => {
  const doencas = await Doenca.find();
  res.send(doencas);
});

//Retorna uma doença específica com o ID fornecido
router.get('/doencas/:id', async (req, res) => {
  const doenca = await Doenca.findById(req.params.id);
  res.send(doenca);
});

//Adiciona uma nova doença
router.post('/doencas', async (req, res) => {
  const { nome, sintomas, tratamento } = req.body;

  const doenca = new Doenca({
    nome,
    sintomas,
    tratamento,
  });

  await doenca.save();
  res.send(doenca);
});

//Atualiza uma doença existente com o ID fornecido
router.put('/doencas/:id', async (req, res) => {
  const doenca = await Doenca.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.send(doenca);
});

//Exclui uma doença existente com o ID fornecido
router.delete('/doencas/:id', async (req, res) => {
  await Doenca.findByIdAndDelete(req.params.id);
  res.send({ message: 'Doença removida com sucesso' });
});
