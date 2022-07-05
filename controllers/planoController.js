const db = require("../database/db.js");

async function getPlano(id) {
    const con = await db.databaseConnection();
    const planoQuery = await con.query("select * from Planos where Id = " + id);
    
    const plano = planoQuery[0].map(plano => { return plano });

    return plano;
}

async function getAllPlanos() {
    const con = await db.databaseConnection();
    const [planos] = await con.query("select * from Planos");

    return planos;
}

module.exports = { getAllPlanos, getPlano };