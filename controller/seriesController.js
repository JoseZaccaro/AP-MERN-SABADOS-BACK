import { Chapter, Serie } from '../models/Serie.js';
// import { series } from '../utils/series.js';

const seriesController = {
    getAllSeries: async (req, res, next) => {

        const series = await Serie.find()
        res.json({
            data: series,
            success: true,
            error: null
        })
    },
    getOneSerie: async (req, res, next) => {
        try {
            const { name } = req.params
            // const serie = series.find(serie => serie.name.toLowerCase() == name.toLowerCase())
            const serie = await Serie.findOne({
                name: { $regex: new RegExp("^" + name.toLowerCase(), "i") }
            })
            // .populate('chapters')

            console.log(serie);
            res.json({
                data: serie,
                success: true,
                error: null
            })
        } catch (error) {
            console.log(error);
        }

    },
    postOneSerie: async (req, res, next) => {
        console.log(req.body);
        // const { } = req.body

        const newSerie = await Serie.create(req.body)
        res.json({
            data: newSerie,
            success: true,
            error: null
        })
    },

    addOneChapter: async (req, res, next) => {
        console.log(req.body);
        // const { } = req.body

        const newChapter = await Chapter.create(req.body)
        const updatedSerie = await Serie.findOneAndUpdate({ _id: req.body.serie }, {
            $push: { chapters: newChapter._id }
        }, { new: true })

        res.json({
            data: newChapter,
            updatedSerie,
            success: true,
            error: null
        })
    },
    getChaptersFromSerie: async (req, res, next) => {
        try {
            console.log(req.body);
            const queries = { serie: req.params.id }
            if (req.query.season) {
                queries.season = req.query.season
            }
            const chapter = await Chapter.find(queries)


            res.json({
                data: chapter,
                success: true,
                error: null
            })
        } catch (error) {
            console.log(error);
        }

    },

}

export default seriesController