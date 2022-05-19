const { response } = require("express");
const { connection } = require('../database/connection');

const responseModel = {
    isSuccessful: false,
    data: [],
    error: [],
};

module.exports = {

    async createPessoa(req, res) {
        const response = { ...responseModel };

        const { nome, documento, dataNascimento, telefone, tipoPessoa, DataInclusao } = req.body;

        const [, affectRows] = await connection.query(`
            INSERT INTO Pessoa VALUES (DEFAULT, '${nome}', '${document}', '${dataNascimento}', '${telefone}', '${tipoPessoa}', '${DataInclusao}')
        `);

        response.isSuccessful = affectRows > 0;

        return res.json(response);
    }
};