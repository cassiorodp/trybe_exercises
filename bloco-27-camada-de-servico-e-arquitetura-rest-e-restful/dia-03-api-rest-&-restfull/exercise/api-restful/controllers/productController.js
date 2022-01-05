const express = require('express');
const ProductModel = require('../models/productModelMongo');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const products = await ProductModel.getAll();

  return res.status(200).json(products);
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  const product = await ProductModel.getById(id);

  if (!product) {
    res.status(404).json({ message: 'Produto não encontrado' });
  }

  return res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  try {
    const newProduct = await ProductModel.add(name, brand);

    return res.status(200).json(newProduct);
  } catch (e) {
    return res.status(500).send({ message: 'Algo deu errado' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const products = await ProductModel.exclude(req.params.id);
    console.log(products);

    return res.status(200).json(products);
  } catch (e) {
    return res.status(500).send({ message: 'Algo deu errado' });
  }
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;
  const { id } = req.params;

  try {
    await ProductModel.update(id, name, brand);

    return res.status(200).json({ message: `Produto ${id} atualizado` });
  } catch (e) {
    return res.status(500).send({ message: 'Algo deu errado' });
  }
});

module.exports = router;