import { Router } from "express";
import { getUser } from "../controllers/userController";
import { checkAuth } from "../controllers/authMiddleware";
import { getTasks } from "../controllers/taskController";

const router = Router();

router.get("/user", checkAuth, getUser);
router.get("/users", getUser);

export default router;
