import { Router } from 'express';
const router = Router()
import seriesRouter from './seriesRouter.js';
import peliculasRouter from './peliculasRouter.js';
import { User } from '../models/User.js';
import favRouter from './favRouter.js';

router.use('/series', seriesRouter)
router.use('/movies', peliculasRouter)
router.use('/user', favRouter)


export default router