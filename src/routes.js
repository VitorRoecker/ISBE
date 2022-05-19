const router = require('express').Router();

const pessoaController = require('./controllers/PessoaController')

router.post('/pessoa/create', pessoaController.createPessoa);

module.exports = router;