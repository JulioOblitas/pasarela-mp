import {CategoriaProductoService} from "../services/categoria.producto.service.js"
export async function crear(req,res){
    const resultado  = await CategoriaProductoService.crear(req.body);
    return res.status(resultado.message ? 400 : 201).json(resultado);

}

export async function listarCategoriaProducto(req,res){
    const resultado  = await CategoriaProductoService.listaCategoriaProducto({});
    return res.status(resultado.message ? 400 : 201).json(resultado);

}

