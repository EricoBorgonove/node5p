const db = require('../db')


async function consultaFuncionarios() {
    const conn = await db.connect()
    //return await conn.query ('Select * from funcionarios')
    const [row] = await conn.query('Select * from funcionarios inner join cargos on cargo_id = cargos.id')
    return row
}

async function consulta1Fun(id) {
    const conn = await db.connect()
    const sql = 'select * from funcionarios  where id = ?'
    const value = id
    const [row] = await conn.query(sql, value)
    return row
}

async  function insertFuncionario (funcionario){
    const conn = await db.connect ()
    const sql = 'INSERT INTO funcionarios (nome, data_nascimento, matricula , data_contratacao , setor_id ) values (?,?,?,?,?)'
    const values = [funcionario.nome, funcionario.data_nascimento, funcionario.matricula, funcionario.data_contratacao, funcionario.setor_id]
    await conn.query (sql, values)

    return 'funcionou'
}

async function updateFuncionario (id, setor_id){
    const conn = await db.connect ()
    const sql = 'UPDATE funcionarios SET setor_id = ? where id = ?'
    const values = [setor_id, id]
    await conn.query (sql, values)
    return 'funcionario atualizado'
}
async function deleteFuncionario (id){
    const conn = await db.connect ()
    const sql = 'DELETE FROM funcionarios where id = ?'
    await conn.query (sql, id)
    return 'funcionario excluido com sucesso'
}

module.exports = {consultaFuncionarios,consulta1Fun, insertFuncionario, updateFuncionario, deleteFuncionario}