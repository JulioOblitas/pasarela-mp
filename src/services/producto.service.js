
import  { Producto } from "../models/producto.model.js"
export class ProductoService{
    static async crear(data){
  /*
      // Metodo II:
      // Primero creamos la instancia pero no se guarda en la bd
      const instanciaNuevoProducto = new Producto(data);
      // Segundo : una vez que hemos modificados algun valor previo recien guardamos
      instanciaNuevoProducto.nombre = "random" + instanciaNuevoProducto.nombre;
      // el metodo save es un metodo asincrono y es el encargado de hacer el guardado de la informacion en la bd
      await instanciaNuevoProducto.save();
      // Metodo III
      // si la insercion sera de uno o varios registros se podra utilizar el metodo insertMany y devolvera un array con todos los elementos agregados a la bd
      await Producto.insertMany([
        { nombre: "Producto 1" },
        { nombre: "producto 2" },
        { nombre: "producto 3" },
      ]);
      */
        try {
            const nuevoproducto = await Producto.create(data)
            return nuevoproducto
        } catch (e) {
            return{
                message: e.message
            }
            
        }
    }




}