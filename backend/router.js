import { Router } from "express";
import* as rh from "./requset.js"


const router = Router();
router.route("/adduser").post(rh.adduser)
router.route("/getuser").get(rh.getuser)
router.route('/deletUser/:_id').delete(rh.deleteuser)



export default router;