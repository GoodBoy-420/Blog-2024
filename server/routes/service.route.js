import express from "express";
import * as serviceController from "../controllers/service.controller.js";

const router = express.Router();

router.get("/services", serviceController.showServices);
router.post("/service/create", serviceController.createServices);
router.delete("/service/:id", serviceController.deleteServices);
router.put("/service/:id", serviceController.updateServices);

export default router;
