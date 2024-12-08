import express from "express";
import * as BlogController from "../controllers/blog.controller.js";

const router = express.Router();

router.get("/blogs", BlogController.showBlogs);
router.post("/blog/create", BlogController.createBlog);
router.delete("/blog/:id", BlogController.deleteBlog);
router.put("/blog/:id", BlogController.updateBlog);

export default router;
