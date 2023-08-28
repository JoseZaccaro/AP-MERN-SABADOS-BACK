import { Router } from 'express';
import peliculasController from '../controllers/peliculasController.js';
const peliculasRouter = Router()

peliculasRouter.get('/', peliculasController.getAllMovies)
peliculasRouter.get('/:id', peliculasController.getAMovie)
peliculasRouter.post('/', peliculasController.postAMovie)


export default peliculasRouter