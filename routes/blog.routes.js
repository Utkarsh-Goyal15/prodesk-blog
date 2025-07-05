import { Router } from "express";
import { createBlog } from "../controllers/createBlog.controller.js";
import { deleteBlog } from "../controllers/deleteBlog.controller.js";
import { modifyBlog } from "../controllers/modifyBlog.controller.js";
import {upload} from '../middlewares/multer.middleware.js'

const router=Router();

router.route('/create').post(
    upload.single('image'),
    createBlog
);
router.route('/delete').post(deleteBlog);
router.route('/modify').post(modifyBlog);

export default router