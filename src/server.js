import express, {json}  from "express";
import mongoose from "mongoose";
import { Producto } from "../src/models/producto.model.js"
import { Categoria } from "../src/models/categoria.model.js"
import { CategoriaProducto } from "../src/models/categoria.producto.model.js"
import { Persona } from "../src/models/personas.model.js"
import { Historia  } from "../src/models/stories.model.js"

import { productoRouter } from "./routers/producto.router.js";
import { categoriaRouter } from "./routers/categoria.router.js"
import { categoriaProductoRouter } from "./routers/categoria.producto.router.js";

import mercadopago  from "mercadopago";
import { personaRouter } from "./routers/persona.router.js";
import { historiaRouter } from "./routers/historia.router.js";
import { pagoRouter } from "./routers/pago.router.js";
import { clienteRouter } from "./routers/cliente.router.js";
mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_MERCADOPAGO,
    integrator_id: process.env.INTEGRATOR_ID
} )


const app = express()
const PORT  = process.env.PORT ?? 3000;
app.use(json())
app.use(productoRouter)
app.use(categoriaRouter)
app.use(categoriaProductoRouter)
app.use(personaRouter)
app.use(historiaRouter)
app.use(pagoRouter)
app.use(clienteRouter)

app.listen(PORT, async() =>{
    console.log(`servidor" ${PORT}`)
    try {
        await mongoose.connect(
        process.env.NODE_ENV ==="production"
        ? process.env.DATABASE_URL
        : process.env.DATABASE_URL_DEV)    
        console.log("bd sincronizado")
    } catch (error) {
        
        console.log("error")
    }
    

    
     
} )