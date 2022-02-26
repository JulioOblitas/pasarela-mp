import mongoose  from "mongoose";
const storySchema =new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Persona' },
    title: String,
    fans: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Persona' }]
  });

  
export const  Historia  = mongoose.model("Historia", storySchema)