var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.render("index");
});

router.post('/cadastrar', async function (req, res) {
    const request = JSON.parse(JSON.stringify(req.body));

    res.redirect('/')
})

router.post('/login', async function (req, res) {
    const request = JSON.parse(JSON.stringify(req.body));

    res.redirect('/')
})

router.get("/plano", function (req, res) {
    res.render("planos");
});

router.get("/doar", function (req, res) {
    res.render("doacao");
});

module.exports = router;
