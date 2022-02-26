import {PagoService} from "../services/pagos.services.js"

export async function crearPreferencia(req,res){
    const resultado  = await PagoService.generaPreferenciaPago(req.body);
    return res.status(201).json(resultado);
}