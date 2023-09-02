import { Schema, model } from "mongoose"

const movieSchema = Schema({
    name: { type: String, required: true },
    genre: { type: String, required: true },
    year: { type: Number, required: true },
    description: { type: String, required: true },
    coverImage: { type: String, required: true },
    detailImage: { type: String, required: true },
    duration: { type: Number },
    creators: [{ type: String }],
    actors: [{ type: String }],
    url: { type: String, required: true }
})

const Movie = model('movie', movieSchema)

export { Movie }