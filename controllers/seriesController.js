import { peliculas } from './../utils/peliculas.js';

const seriesController = {
    getAllSeries: (req, res, next) => {

        res.json({
            peliculas,
            success: true,
            error: null
        })
    }
}

export default seriesController