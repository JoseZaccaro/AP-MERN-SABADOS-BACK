import { Schema, Types, model } from "mongoose";

const serieSchema = Schema({
    nombre: { type: String, required: true },
    genero: [{ type: String, required: true }],
    anio: { type: Number, required: true },
    descripcion: { type: String, required: true },
    imagen_portada: { type: String, required: true },
    imagen_detalle: { type: String, required: true },
    capitulos: [ { type: Types.ObjectId, ref: 'capitulo' } ],
    temporadas: { type: Number }
})

const capituloSchema = Schema({
    nombre: { type: String, required: true },
    url: { type: String, required: true },
    numero: { type: Number, required: true },
    imagen_portada: { type: String, required: true },
    duracion: { type: Number, required: true },
    temporada: { type: Number }
})

const Serie = model('serie', serieSchema)
const Capitulo = model('capitulo', capituloSchema)

export { Serie, Capitulo }