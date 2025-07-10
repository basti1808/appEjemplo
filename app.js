import express from 'express'
import ClienteRouter from './src/routes/ClienteRouter.js'
import __dirname from './src/utils.js'

const app = express()
app.use(express.static(`${__dirname}/public`))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/clientes',ClienteRouter)

app.listen(8085,() => {console.log(`Listen on port 8085`)})