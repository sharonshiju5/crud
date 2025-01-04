import express from "express"
import env from "dotenv"
import connect from "./connection.js"
import router from "./router.js";
import userModel from "./user.model.js"

env.config();


const app = express();
app.use(express.static("../frontend"));
app.use(express.json());
app.use("/api",router)
connect().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server is running on port http://localhost:${process.env.PORT}`);
        
    })
})