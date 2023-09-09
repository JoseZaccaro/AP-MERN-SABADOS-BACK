import { Router } from 'express';
import { User } from '../models/User.js';
const favRouter = Router()


favRouter.get('/', async (req, res) => {

    const users = await User.find()
    res.json({
        users
    })
})

favRouter.get('/favs/:id', async (req, res) => {

    const user = await User.findById(req.params.id).populate("favorites")
    console.log(user.favorites);
    res.json({
        favorites: user.favorites
    })
})

favRouter.post('/', async (req, res) => {
    const user = await User.create(req.body)
    res.json({
        success: true,
        user
    })
})
favRouter.put('/addFav/:id', async (req, res) => {
    const user = await User.findById(req.params.id)
    const favoritoElegido = req.body.favorite
    console.log(req.body);
    if (user.favorites.find(fav => String(fav) === String(favoritoElegido))) {
        return res.json({
            success: false,
            message: 'el favorito ya estaba agregado'
        })
    }
    user.favorites = [...user.favorites, favoritoElegido]
    await user.save()
    const actualizado = await User.findById(req.params.id).populate('favorites')
    console.log(user);
    res.json({
        success: true,
        user:actualizado
    })
})

favRouter.put('/removeFav/:id', async (req, res) => {
    const user = await User.findById(req.params.id)
    const favoritoElegido = req.body.favorite
    const favoritosFiltrados = user.favorites.filter((favorito) => String(favorito) !== String(favoritoElegido))
    user.favorites = favoritosFiltrados
    await user.save()
    const actualizado = await User.findById(req.params.id).populate('favorites')

    console.log(user);
    res.json({
        success: true,
        user:actualizado
    })
})
export default favRouter
