import { Schema, model } from "mongoose"

const peliculaSchema = Schema({
    nombre: { type: String, required: true },
    genero: [{ type: String, required: true }],
    anio: { type: Number, required: true },
    descripcion: { type: String, required: true },
    imagen_portada: { type: String, required: true },
    imagen_detalle: { type: String, required: true },
    duracion: { type: Number },
    director: { type: String },
    actores: [{ type: String }],
    video_url: { type: String, required: true }
})

const Pelicula = model('pelicula', peliculaSchema)

export { Pelicula }