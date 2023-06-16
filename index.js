(async () => {
    const db = require('./db')
    const funcionarioController = require ('./FuncionarioController') 

    //console.log("funcionou")

    //console.log('Select')
    //const funcionarios = await funcionarioController.consultaFuncionarios()
    //console.log(funcionarios)

    //console.log('Select de 1 funcionario')
    //const funcionario = await funcionarioController.consulta1Fun(13)
    //console.log(funcionario)

    //const retorno = await funcionarioController.insertFuncionario ({nome: "Erico", data_nascimento: "1987-09-16", matricula: "89", data_contratacao: "2023-05-25", setor_id: 5 })
    //console.log (retorno)
    
    //const retorno = await funcionarioController.updateFuncionario (13, 1)
    //console.log (retorno)

    const retorno = await funcionarioController.deleteFuncionario (13)
    console.log (retorno)

    

})() 
