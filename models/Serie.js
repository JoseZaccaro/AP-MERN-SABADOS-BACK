import { Schema, Types, model } from "mongoose";

const serieSchema = new Schema({
    name: { type: String },
    description: { type: String },
    coverImage: { type: String },
    detailImage: { type: String },
    chapters: [{ type: Types.ObjectId, ref: 'chapter' }],
    creators: [{ type: String }],
    genre: { type: String, require: true },
    seasons: Number,
    year: Number
})

const chapterSchema = Schema({
    name: String,
    duration: Number,
    url: String,
    description: String,
    coverImage: String,
    chapter: Number,
    season: Number,
    releaseDate: String,
    serie: { type: Types.ObjectId, ref: 'serie' }
})

export const Chapter = model('chapter', chapterSchema)

export const Serie = model('serie', serieSchema)
