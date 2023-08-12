import { series } from '../utils/series.js';

const seriesController = {
    getAllSeries: (req, res, next) => {
        res.json({
            data: series,
            success: true,
            error: null
        })
    },
    getOneSerie: (req, res, next) => {
        const { name } = req.params
        const serie = series.find(serie => serie.name.toLowerCase() == name.toLowerCase())

        res.json({
            data: serie,
            success: true,
            error: null
        })
    },
    postOneSerie: (req, res, next) => {
        res.json({
            data: series,
            success: true,
            error: null
        })
    },

}

export default seriesController