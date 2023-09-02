import { Schema, Types, model } from "mongoose";

const userSchema = Schema({
    name: { type: String },
    lastName: { type: String },
    favorites: [{ type: Types.ObjectId, ref: 'serie' }, { type: Types.ObjectId, ref: 'movie' }]
})


export const User = model('user', userSchema)
