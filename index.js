const express = require ('express')
const path = require ('path')
const app = express()
const port = 3000

app.use (express.static('public'))

app.get('/', (req, res) =>{
    //res.send('ola Mundo')
    res.sendFile(path.resolve('index.html'))
})

app.get ('/cadfun', (req,res) =>{
    res.sendFile(path.resolve('public/pages/cadastroFun.html'))
})



app.use(function(req, res, next){
    res.status(404).sendFile(path.resolve('./public/404.html'))
})
app.listen (port, ()=> {
     console.log (`App rodando na porta: ${port}`)
})





