const express=require('express')
const app= express()
const routes = require('./rutas.js')
const port=3000

app.get('/',(req,res)=>{
    res.sendFile('./static/index.html',{
        root:__dirname
    })
})

app.use(routes) //app.use('/usuario,routes)

app.listen(port,()=>{
    console.log('Server on port ${3000}')
})