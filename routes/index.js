import { Router } from 'express';
const router = Router()
import seriesRouter from './seriesRouter.js';
import peliculasRouter from './peliculasRouter.js';

router.use('/series', seriesRouter)
router.use('/peliculas', peliculasRouter)

export default router