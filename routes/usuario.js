var express = require('express');
var router = express.Router();

// Require controller modules.
var usuarioController = require('../controllers/usuarioController');

router.get('/getUsuarios', async (req, res) => {
    const usuarios = await usuarioController.getUsuarios();
    res.json(usuarios);
});

router.get('/getUsuario', async (req, res) => {
    const usuario = await usuarioController.getUsuario(4);
    res.json(usuario);
})

module.exports = router;