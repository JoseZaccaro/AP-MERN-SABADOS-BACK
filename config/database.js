import mongoose from "mongoose";

mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("Database conectada"))
    .catch((err) => console.log("Error de conexion " + err))
