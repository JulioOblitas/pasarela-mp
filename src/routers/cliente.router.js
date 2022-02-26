import { Router } from "express";
import {crearCliente} from "../controller/cliente.controller.js"

export const  clienteRouter = Router();

clienteRouter.route("/cliente").post(crearCliente)