var express = require('express');
var router = express.Router();

// Require controller modules.
var planosController = require('../controllers/planoController');

router.get('/getPlanos', async (req, res) => {
    const planos = await planosController.getAllPlanos();
    console.log(planos);
    res.json(planos);
});

router.get('/getPlano', async (req, res) => {
    const plano = await planosController.getPlano(3);
    res.json(plano);
})

module.exports = router;