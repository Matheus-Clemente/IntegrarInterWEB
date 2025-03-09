const express = require('express');
const router = express.Router();
const { criarPedido, listarPedidos, atualizarPedido, deletarPedido } = require('../controller/pedidoController');
const { protegerRota } = require('../middleware/authMiddleware');

router.post('/pedidos', protegerRota, criarPedido);
router.get('/pedidos', protegerRota, listarPedidos);
router.put('/pedidos/:id', protegerRota, atualizarPedido);
router.delete('/pedidos/:id', protegerRota, deletarPedido);

module.exports = router;
