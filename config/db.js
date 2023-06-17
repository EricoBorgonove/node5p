async function connect() {
    if (global.connection && global.connection.state !==
        'disconnectec') {
        return global.connection
    }
    const mysql = require('mysql2/promise')
    const connection = await mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'Senha123@',
        database: 'rh_eu',
        port: 3306
    })
    console.log("Estamos conectados no Mysql")
    global.connection = connection
    return connection
}

module.exports = {connect}


