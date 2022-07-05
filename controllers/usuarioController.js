const db = require("../database/db.js");

async function getUsuario(id) {
    const con = await db.databaseConnection();
    const usuarioQuery = await con.query("select * from Usuarios where Id = " + id);

    const usuario = usuarioQuery[0].map(user => {
        return {
            Id: user.Id,
            Nome: user.Nome,
            Email: user.Email,
            DtInclusao: user.DtInclusao
        };
    })

    return usuario;
}

async function getUsuarios() {
    const con = await db.databaseConnection();
    const [usuariosQuery] = await con.query("select * from Usuarios");

    const usuarios = usuariosQuery.map(user => {
        return { Id: user.Id, Nome: user.Nome, Email: user.Email }
    });

    return usuarios;
}

async function postUsuario(usuario) {
    const con = await db.databaseConnection();
    const result = await don.query("Insert into Usuarios " +
        "(Codigo, Nome, Email, Senha, UtilizaApi, Situacao, DtInclusao)" +
        "values (" +
        usuario.codigo + "," + usuario.nome + "," + usuario.email + "," + usuario.senha + "," + usuario.utilizaApi + "," + usuario.situacao + "," + usuario.dtInclusao + ")");

    return result;
}

module.exports = { getUsuario, postUsuario, getUsuarios }