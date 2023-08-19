import mongoose from "mongoose";

mongoose.connect('mongodb+srv://UserDeEjemplo:ACCoT3i0aL1BEMnV@cluster01.hgpsmrq.mongodb.net/mindflix')
    .then(() => console.log('Database connected'))
    .catch((err) => console.log('Error de conexion ' + err))
    