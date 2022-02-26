import { Router } from "express";
import { crearCategoria, listarCategoria, listarCategoriaPorId } from "../controller/categoria.controller.js";

export const categoriaRouter = Router();

categoriaRouter.route("/categoria").post(crearCategoria).get(listarCategoria)
categoriaRouter.route("/categoria/:id").get(listarCategoriaPorId)


    // hacer el get de todas las categorias ordenadas alfabeticamente por el nombre de manera asc
  // NO USAR MAP o FILTER, usar los ordenamientos de mongoose
// traer la categoria con todos sus productos