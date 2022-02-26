
import  { Historia } from "../models/stories.model.js"
export class HistoriaService{
    static async crear(data){
        try {
            const datahistoria = await Historia.create(data)
            return datahistoria
        } catch (e) {
            return{
                message: e.message
            }
            
        }
    }




}