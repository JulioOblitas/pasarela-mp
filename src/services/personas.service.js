
import  { Persona } from "../models/personas.model.js"
import { Historia } from "../models/stories.model.js"
export class PersonaService{
    static async crear(data){
        try {
            const datapers = await Persona.create(data)
            return datapers
        } catch (e) {
            return{
                message: e.message
            }
            
        }
    }

    static async listarPersona() {
        try {
     //const lista = await PersonaService.find().populate('producto');
     
     const lista = await Persona.find().populate('author').exec();
     
    return lista

   } catch (error) {
       return {
   message: error.message
   }

    
    }
}




}