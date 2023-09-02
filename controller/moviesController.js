import { Movie } from '../models/Movie.js';
// import { series } from '../utils/series.js';

const moviesController = {
    getAllMovies: async (req, res, next) => {

        const movies = await Movie.find()
        res.json({
            data: movies,
            success: true,
            error: null
        })
    },
    getOneMovie: async (req, res, next) => {
        try {
            const { name } = req.params
            // const serie = series.find(serie => serie.name.toLowerCase() == name.toLowerCase())
            const movie = await Movie.findOne({
                name: { $regex: new RegExp("^" + name.toLowerCase(), "i") }
            })
            // .populate('chapters')

            console.log(movie);
            res.json({
                data: movie,
                success: true,
                error: null
            })
        } catch (error) {
            console.log(error);
        }

    },
    postOneMovie: async (req, res, next) => {
        console.log(req.body);
        // const { } = req.body

        const newMovie = await Movie.create(req.body)
        res.json({
            data: newMovie,
            success: true,
            error: null
        })
    },
    updateOneMovie: async (req, res, next) => {
        console.log(req.body);
        const { id } = req.params

        const updatedSerie = await Movie.findOneAndUpdate({ _id: id }, req.body)
        res.json({
            data: updatedSerie,
            success: true,
            error: null
        })
    },
    deleteOneMovie: async (req, res, next) => {
        const { id } = req.params

        const updatedSerie = await Movie.findOneAndDelete({ _id: id })
        res.json({
            data: updatedSerie,
            success: true,
            error: null
        })
    },


}

export default moviesController