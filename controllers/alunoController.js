const db = require("../database/db.js");

async function getAluno(id) {
    const con = await db.databaseConnection();
    const alunosQuery = await con.query('select * from Alunos where Id = ' + id);

    const aluno = alunosQuery[0].map(aln => { return aln });

    return aluno;
}

async function getAlunos() {
    const con = await db.databaseConnection();
    const [alunos] = await con.query('select * from Alunos');

    return alunos;
}

module.exports = { getAlunos, getAluno };