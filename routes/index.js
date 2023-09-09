import { Router } from 'express';
import peliculasRouter from './peliculasRouter.js';
import seriesRouter from './seriesRouter.js';
import userRouter from './userRouter.js';

const router = Router()

router.use('/peliculas', peliculasRouter)
router.use('/series', seriesRouter)
router.use('/user', userRouter)
// router.use('/cuentas', peliculasRouter)
// router.use('/listaFavoritos', peliculasRouter)
// router.use('/peliculas', peliculasRouter)

export default router