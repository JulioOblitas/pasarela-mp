import { PersonaService } from "../services/personas.service.js";

export async function crearPersona(req, res) {
  // crear el dto
  // TODO (tarea)
  const resultado = await PersonaService.crear(req.body);
  // metodo simple
  // if(resultado.message){
  //     return res.status(400).json(resultado)
  // }else{
  //     return res.status(201).json(resultado)
  // }
  return res.status(resultado.message ? 400 : 201).json(resultado);
}

export async function listarPersona(req, res) {
  // crear el dto
  // TODO (tarea)
  const resultado = await PersonaService.listarPersona(req.body);
  // metodo simple
  // if(resultado.message){
  //     return res.status(400).json(resultado)
  // }else{
  //     return res.status(201).json(resultado)
  // }
  return res.status(resultado.message ? 400 : 201).json(resultado);
}

