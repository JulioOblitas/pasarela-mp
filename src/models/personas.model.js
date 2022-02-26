import mongoose  from "mongoose";
const personSchema = new mongoose.Schema({    
    name: String,
    age: Number,
    stories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Historia' }]
  });

export const  Persona  = mongoose.model("Persona", personSchema)