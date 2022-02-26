import {Categoria}  from "../models/categoria.model.js"
import { CategoriaProducto } from "../models/categoria.producto.model.js"
import { Producto } from "../models/producto.model.js"



export class CategoriaService{
    static async crear(data) {
        try {
          const nuevaCategoria = await Categoria.create(data)
         return nuevaCategoria
    
        } catch (error) {
            return {
        message: error.message
        }
    }
    }
    

    static async listarCategoria() {
 //            try {
          //const listaCategoria = await CategoriaProducto.find().populate(Producto.Producto).exec();
              
                    
          //const listaCategoria = await Producto.find({}).populate(Categoria.Categoria)          
          
        //  const listaCategoria = await Producto.find({}).populate(Categoria.Categoria)          
          //const listaCategoria = await CategoriaProducto.find().populate(Categoria.Categoria).populate(Producto.Producto)                    


       //  return listaCategoria
    
      //  } catch (error) {
      //      return {
     //   message: error.message
      //  }
    
       //  }
   
   
             try {
          const listaCategoria = await Categoria.find(
            ).sort( {
                nombre: 1
            })


         return listaCategoria
    
        } catch (error) {
            return {
        message: error.message
        }
    
         }
    }

    
}