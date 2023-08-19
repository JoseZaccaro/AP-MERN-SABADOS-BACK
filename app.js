import "dotenv/config.js"
import "./config/database.js"
import express from 'express';
import cors from 'cors';
import router from './routes/index.js';
const server = express()

server.use(cors())
server.use(express.json())

server.use('/api', router)


server.listen(process.env.PORT, () => { console.log('Escuchando el puerto ' + process.env.PORT) })
