import { peliculas } from './../utils/peliculas.js';

const peliculasController = {
    getAllMovies: (req, res, next) => {

        res.json({
            peliculas,
            success: true,
            error: null
        })
    },
    postAMovie: (req, res, next) => {
        peliculas.push(req.body)
        res.json({
            peliculas,
            success: true,
            error: null
        })
    },
    getAMovie: (req, res, next) => {
        const peli = peliculas.find(peli => peli.nombre == req.params.variable)
        res.json({
            info: peli,
            success: true,
            error: null
        })
    }
}

export default peliculasController