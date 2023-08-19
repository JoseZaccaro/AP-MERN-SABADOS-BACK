import { Capitulo, Serie } from '../models/Series.js';
import { peliculas } from './../utils/peliculas.js';

const seriesController = {
    getAllSeries: async (req, res, next) => {
        try {
            const series = await Serie.find()
            res.json({
                series,
                success: true,
                error: null
            })
        } catch (error) {
            console.log(error);
        }

    },
    getASerie: async (req, res, next) => {
        const id = req.params.id
        try {
            const serie = await Serie.findById(id).select("-imagen_portada -anio -__v").populate({
                path:'capitulos',
                select:'-__v'
            })


            res.json({
                serie,
                success: true,
                error: null
            })
        } catch (error) {
            console.log(error);
        }

    },
    postASerie: async (req, res, next) => {
        try {
            const {
                nombre,
                genero,
                anio,
                descripcion,
                imagen_detalle,
                imagen_portada,
                capitulos,
                temporadas
            } = req.body
            const serie = new Serie(
                {
                    nombre,
                    genero,
                    anio,
                    descripcion,
                    imagen_portada,
                    imagen_detalle,
                    capitulos,
                    temporadas
                }
            )
            await serie.save()
            res.json({
                serie,
                success: true,
                error: null
            })
        } catch (err) {
            console.log(err);
        }
    },
    postAChapter: async (req, res, next) => {
        const { id } = req.params
        try {
            const {
                nombre,
                url,
                numero,
                imagen_portada,
                duracion,
                temporada,
            } = req.body
            const capitulo = new Capitulo({
                nombre,
                url,
                numero,
                imagen_portada,
                duracion,
                temporada
            })
            // console.log(id);
            // console.log(capitulo);
            await capitulo.save()
            const serie = await Serie.findOneAndUpdate({ _id: id }, {
                $push: { capitulos: capitulo._id }
            }, { new: true })
            res.json({
                capitulo,
                serie,
                success: true,
                error: null
            })
        } catch (err) {
            console.log(err);
        }
    },

}

export default seriesController