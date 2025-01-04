import e from "express";
import userSchema from "./user.model.js"


export async function adduser(req,res){
    const {name,email,phone}=req.body;
    console.log(name,email,phone);
    if(!(name,email,phone)){
        return res.status(404).send({msg:"fields are empty"})
    }
    await userSchema.create({name,email,phone}).then(()=>{
        return res.status(201).send({msg:"succesfully added"})
    }).catch((error)=>{
        res.status(500).send({error})
    })
}
export async function getuser(req,res) {
    try {
        const user=await userSchema.find();
        res.status(200).send(user)
    } catch (error) {
        console.log(error);
        
    }
    
}
export async function deleteuser(req,res){
        const {_id}=req.params;
        await userSchema.deleteOne({_id}).then(()=>{
            res.status(200).send("User deleted")
        }).catch((error)=>{
            res.status(500).send({error})
        })
}