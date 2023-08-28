// import { peliculas } from './../utils/peliculas.js';

import { Pelicula } from "../models/Peliculas.js";

const peliculasController = {
    getAllMovies: async (req, res, next) => {
        try {
            const peliculas = await Pelicula.find()
            res.json({
                peliculas,
                success: true,
                error: null
            })
        } catch (error) {
            console.log(error);
        }

    },
    getAMovie: async (req, res, next) => {
        const id = req.params.id
        try {
            const pelicula = await Pelicula.findById(id).select("-__v")

            res.json({
                pelicula,
                success: true,
                error: null
            })
        } catch (error) {
            console.log(error);
        }

    },
    postAMovie: async (req, res, next) => {
        try {
            const {
                nombre,
                genero,
                anio,
                descripcion,
                imagen_detalle,
                imagen_portada,
                duracion,
                director,
                actores,
                video_url
            } = req.body
            const pelicula = new Pelicula(
                {
                    nombre,
                    genero,
                    anio,
                    descripcion,
                    imagen_portada,
                    imagen_detalle,
                    duracion,
                    director,
                    actores,
                    video_url
                }
            )
            await pelicula.save()
            res.json({
                pelicula,
                success: true,
                error: null
            })
        } catch (err) {
            console.log(err);
        }
    },
}

export default peliculasController