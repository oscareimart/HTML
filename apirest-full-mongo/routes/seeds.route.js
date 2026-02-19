import { Router } from "express";

import { processSeeds } from "../controllers/seeds.controller.js";

const router = Router();

router.post("/", processSeeds);
export default router;
