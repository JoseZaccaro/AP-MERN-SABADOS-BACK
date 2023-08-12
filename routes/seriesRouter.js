import { Router } from 'express';
import seriesController from '../controllers/seriesController.js';
const seriesRouter = Router()

seriesRouter.get('/', seriesController.getAllSeries)


export default seriesRouter