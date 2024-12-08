import express from "express";
import * as TeamController from "../controllers/team.controller.js";

const router = express.Router();

router.get("/teams", TeamController.showTeams);
router.post("/team/create", TeamController.createTeam);
router.delete("/team/:id", TeamController.deleteTeam);
router.put("/team/:id", TeamController.updateTeam);

export default router;
