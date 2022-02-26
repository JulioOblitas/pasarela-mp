import {PagoService} from "../services/pagos.services.js"

export async function crearPreferencia(req,res){
    const resultado  = await PagoService.generaPreferenciaPago(req.body);
    return res.status(201).json(resultado);
}

export async function recibirNotificacion(req,res){
    console.log('los qeuery parama son:')
    console.log(req.params)
    PagoService.recibirnotificacion(req.body)

    return res.status(200).send();
}