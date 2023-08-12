import { Router } from 'express';
const seriesRouter = Router()
import seriesController from '../controller/seriesController.js';

const { getAllSeries, getOneSerie } = seriesController

seriesRouter.get('/', getAllSeries)
seriesRouter.get('/:name', getOneSerie)


export default seriesRouter