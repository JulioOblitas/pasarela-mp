import {Categoria} from "../models/categoria.model.js"
import {CategoriaProducto} from "../models/categoria.producto.model.js"
import {Producto} from "../models/producto.model.js"


export class CategoriaProductoService{

    static  async crear ({categoriaId,productoId}){
        const  categoriaEncontrada = await Categoria.findById(categoriaId)
        const  productoEncontrado = await Producto.findById(productoId)

        if (!categoriaEncontrada || !productoEncontrado){
            return {
                message: "Categoria o Producto Invalido" 
            };
        }

        const registro  = await CategoriaProducto.findOne({
            categoriaId,
            productoId,
        });

        if (registro){

            return {
                message : "Relacion ya existe",
            };

        }


     // agregaremos ese registro en la bd
    const nuevoRegistro = await CategoriaProducto.create({
        categoriaId,
        productoId,
      });
  
      // modificar en el producto y en la categoria el arreglo de categoriaProductos
      await Categoria.updateOne(
        { _id: categoriaEncontrada._id },
        {
          categoriaProducto: [
            ...categoriaEncontrada.categoriaProducto,
            nuevoRegistro._id,
          ],
        }
      );
  
      await Producto.updateOne(
        { _id: productoEncontrado._id },
        {
          categoriaProducto: [
            ...productoEncontrado.categoriaProducto,
            nuevoRegistro._id,
          ],
        }
      );
       return nuevoRegistro
    }

    static async listaCategoriaProducto(){
      const listado = await CategoriaProducto.find({

      });
      return listado  
    }
    

  }
  

















