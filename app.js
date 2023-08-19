import 'dotenv/config'
import express from "express";
import cors from 'cors'
import router from './routes/index.js';
import './config/database.js'
const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT

app.use('/api', router)
app.get('/', (req, res) => {
    res.send('Hola, bienvenido a mindflix')
})

// app.post('/peliculas')
// app.put('/peliculas/:pelicula')
// app.delete('/peliculas/:pelicula')


app.listen(PORT, () => { console.log('Servidor escuchando el puerto', PORT) })