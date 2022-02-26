import  {Router} from 'express'
import  { crear,listarCategoriaProducto } from "../controller/categoria.producto.controller.js"

export const categoriaProductoRouter = Router();
categoriaProductoRouter.route("/categoria-producto").post(crear).get(listarCategoriaProducto)
