import mongoose from "mongoose";
const ContactSchema= new mongoose.Schema({
    name:{
        type: String,
    },
    message:{
        type: String,
    }
})
export default mongoose.model('Contact', ContactSchema)