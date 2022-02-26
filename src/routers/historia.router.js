import { Router } from "express";
import { crearHistoria, listarHistoria  } from "../controller/historia.controller.js"

export const historiaRouter = Router();

historiaRouter.route("/historia").post(crearHistoria).get(listarHistoria)

