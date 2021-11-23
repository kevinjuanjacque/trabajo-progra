import { Router } from "express";
import {
	createTrucks,
	getAllTruks,
	getIncidentForTruck
} from "../controller/trucks";

const router = Router();

router.get("/", getAllTruks);
router.post("/add", createTrucks);

router.get("/:id/incident", getIncidentForTruck);

export default router;
