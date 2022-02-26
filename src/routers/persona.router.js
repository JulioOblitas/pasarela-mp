import { Router } from "express";
import { crearPersona, listarPersona  } from "../controller/persona.controller.js";

export const personaRouter = Router();

personaRouter.route("/persona").post(crearPersona).get(listarPersona)

