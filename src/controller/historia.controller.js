import { HistoriaService } from "../services/historias.service.js"

export async function crearHistoria(req, res) {
  // crear el dto
  // TODO (tarea)
  const resultado = await HistoriaService.crear(req.body);
  // metodo simple
  // if(resultado.message){
  //     return res.status(400).json(resultado)
  // }else{
  //     return res.status(201).json(resultado)
  // }
  return res.status(resultado.message ? 400 : 201).json(resultado);
}

export async function listarHistoria(req, res) {
  // crear el dto
  // TODO (tarea)
  const resultado = await HistoriaService.listarPersona(req.body);
  // metodo simple
  // if(resultado.message){
  //     return res.status(400).json(resultado)
  // }else{
  //     return res.status(201).json(resultado)
  // }
  return res.status(resultado.message ? 400 : 201).json(resultado);
}

