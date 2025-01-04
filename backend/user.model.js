import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    phone:{type:String}
})
export default mongoose.model.contact||mongoose.model("Contact",userSchema)
