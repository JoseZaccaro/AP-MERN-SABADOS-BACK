import { Router } from 'express';
const peliculasRouter = Router()
import { series } from '../utils/series.js';


peliculasRouter.get('/', (req, res, next) => {
    req.body
    res.json({
        data: series,
        success: true,
        error: null
    })
})

export default peliculasRouter