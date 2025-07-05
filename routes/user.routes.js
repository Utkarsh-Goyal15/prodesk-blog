import { Router } from "express";
import { modifyUser } from "../controllers/modifyUser.controller.js";
import { registerUser } from "../controllers/registerUser.controller.js";
import {upload} from '../middlewares/multer.middleware.js';
const router=Router();

router.route('/create').post(upload.single('image'),registerUser);
router.route('/modify').post(modifyUser);

export default router
