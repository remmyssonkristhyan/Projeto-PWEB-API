const express = require('express');
const router = express.Router();
const bibliotecaController = require("../controllers/bibliotecaController");

router.get('/', bibliotecaController.get);
router.get('/:id', bibliotecaController.getById);
router.post('/', bibliotecaController.post);
router.put('/:id', bibliotecaController.put);
router.delete('/:id', bibliotecaController.delete);

module.exports = router;