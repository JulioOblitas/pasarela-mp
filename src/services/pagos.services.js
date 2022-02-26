import mercadopago from "mercadopago"; 
import {Cliente} from "../models/cliente.model.js"
import { Producto } from "../models/producto.model.js";




export class PagoService{
  static async  generaPreferenciaPago({items,cliente}){
      const clienteEncontrado = await Cliente.findById(cliente);  
      
      
         
          const productosEncontrados = await Promise.all( items.map(async ({id,cantidad})=> {
              const productoEncontrado = await Producto.findById(id);
          return {item: productoEncontrado, cantidad};
        }));

        //console.log(productosEncontrados)

        const itemsMP = productosEncontrados.map(({item,cantidad})=>({
            id: item._id,
            title: item.nombre,
            quantity: cantidad,
            unit_price: +item.precio,
            currency_id: "PEN",

        }));
        console.log(clienteEncontrado);
        console.log(itemsMP);
        try {
        const preferencia = await mercadopago.preferences.create({
            payer:{
                name: clienteEncontrado.nombre,
                surname: clienteEncontrado.apellido,
                address:{
                    zip_code:     clienteEncontrado.direccion.zip,
                    street_name :  clienteEncontrado.direccion.calle,
                    street_number: clienteEncontrado.direccion.numero,
                }, 
                //email : 'test_user_46542185@testuser.com',
                email: clienteEncontrado.correo,
                //identification:{
                 //   type: "DNI",
                 //   number: "40085122"
            },
                 payment_methods: {
                    // https://api.mercadopago.com/v1/payment_methods
                    default_installments: 2, // el numero de cuotas por defecto que aparecera en el formulario
                    installments: 3, // maximo numero de cuotas que puede sacar un usuuario con tarjeta de credito
                    excluded_payment_methods: [
                      {
                        id: "diners",
                      },
                      {
                        id: "debvisa",
                      },
                    ],
                    excluded_payment_types: [
                      // debit_card credit_card atm
                      {
                        id: "atm",
                      },
                    ],               
                
                 
            },
            items: itemsMP,
            auto_return:'approved',
            back_urls: {
                success: `${process.env.DOMINIO}/exito`,
                pending: `${process.env.DOMINIO}/pendiente`,
                failure: `${process.env.DOMINIO}/fallo`,
            },
            notification_url: `${process.env.DOMINIO}/notificaciones`,

        });
        return {
            resultado: preferencia, 
        };
    }catch(error){
        console.log(error);
        return {
           error: error.message,   
        };
    }
    }

    static recibirnotificacion(data){
      console.log("data es")
      console.log(data)
    }
}