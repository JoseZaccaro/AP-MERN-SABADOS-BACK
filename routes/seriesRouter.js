import { Router } from 'express';
import seriesController from '../controllers/seriesController.js';
const seriesRouter = Router()

seriesRouter.get('/', seriesController.getAllSeries)
seriesRouter.get('/:id', seriesController.getASerie)
seriesRouter.post('/', seriesController.postASerie)
seriesRouter.post('/capitulo/:id', seriesController.postAChapter)

export default seriesRouter