var express = require("express");
var router = express.Router();
var planosController = require('../controllers/planoController');

router.get("/", function (req, res) {
    res.render("index");
});

router.get("/adote", async function (req, res) {
    let planos = await planosController.getAllPlanos();
    res.render("doacao", { planos });
});

router.get("/cadPlano", async function (req, res) {
    let planos = await planosController.getAllPlanos();
    res.render("cadPlano", { planos });
});

module.exports = router;
