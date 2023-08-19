import { Router } from 'express';
const seriesRouter = Router()
import seriesController from '../controller/seriesController.js';

const { getAllSeries, getOneSerie, postOneSerie, addOneChapter, getChaptersFromSerie } = seriesController

seriesRouter.get('/', getAllSeries)
seriesRouter.get('/:name', getOneSerie)
seriesRouter.post('/', postOneSerie)
seriesRouter.post('/chapter/', addOneChapter)
seriesRouter.get('/chapters/:id', getChaptersFromSerie)


export default seriesRouter