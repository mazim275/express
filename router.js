import { Router } from "express";
import * as rh from "./reqhandler.js"
const router=Router();  
router.route("/adddata").post(rh.testfunction);
router.route("/getdata").get(rh.getfunction);
router.route("/updatedata").put(rh.updatefunction);
router.route("/deletedata/:id").delete(rh.deletefunction);
router.route("/finddata").get(rh.findonedata);





export default router;