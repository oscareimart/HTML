import { Router } from "express";

import { getLogger } from "../controllers/logger.controller.js";

const router = Router();

router.get("/", getLogger);
export default router;
