import { Router } from "express";
import {
  CompletarTarea,
  createTask,
  eliminarTarea,
  getTasks,
} from "../controllers/taskController";

const routas = Router();

routas.get("/tasks", getTasks);
routas.post("/tasks", createTask);
routas.delete("/tasks/:id", eliminarTarea);
routas.patch("/tasks/:id", CompletarTarea);

export default routas;
