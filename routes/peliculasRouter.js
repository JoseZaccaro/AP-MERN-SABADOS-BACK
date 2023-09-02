import { Router } from 'express';
const peliculasRouter = Router()
import { series } from '../utils/series.js';
import moviesController from '../controller/moviesController.js';
const { getAllMovies, getOneMovie, postOneMovie, updateOneMovie, deleteOneMovie } = moviesController

peliculasRouter.get('/', getAllMovies)
peliculasRouter.get('/:name', getOneMovie)
peliculasRouter.post('/', postOneMovie)
peliculasRouter.put('/:id', updateOneMovie)
peliculasRouter.delete('/:id', deleteOneMovie)

export default peliculasRouter