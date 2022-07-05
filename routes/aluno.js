const express = require('express');
const router = express.Router();

const alunoController = require('../controllers/alunoController');

router.get('/getAluno', async (req, res) => {
    const aluno = await alunoController.getAluno(81);
    res.json(aluno);
});

router.get('/getAlunos', async (req, res) => {
    const alunos = await alunoController.getAlunos();
    res.json(alunos);
});

module.exports = router;