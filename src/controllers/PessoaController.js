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
    },

    async getPessoa(req, res) {
        const response = { ...responseModel };

        const { codigoPessoa } = req.body

        const [, data] = await connection.query(`
            SELECT * FROM Pessoa WHERE Pes_Codigo = ${codigoPessoa}
        `);

        response.isSuccessful = data != null

        response.data = data;

        return res.json(response);
    },

    async updatePessoa(req, res) {
        const response = { ...responseModel };

        const { pessoa } = req.body

        const [, affectRows] = await connection.query(`
            UPDATE Pessoa SET Pes_Nome = '${pessoa.nome}', Pes_Documento = '${pessoa.documento}', Pes_DataNascimento = '${pessoa.dataNascimento}', Pes_Telefone = '${pessoa.telefone}', Pes_TipoPessoa = '${pessoa.tipoPessoa}', Pes_DataInclusao = '${pessoa.dataInclusao}', 
        `);

        response.isSuccessful = affectRows > 0;

        return res.json(response);
    },

    async deletePessoa(req, res){
        const response = { ...responseModel };

        const { codigoPessoa } = req.body;

        const [, affectRows] = await connection.query(`
            DELETE FROM Pessoa WHERE Pes_Codigo = ${codigoPessoa}
        `);

        resresponse.isSuccessful = affectRows > 0;

        return res.json(response);
    }
};