import { Router } from "express";
import { getRegister, registerSystem } from "../controllers/registerSystem";

const RutasRegister = Router();

RutasRegister.get("/register", getRegister);
RutasRegister.post("/register", registerSystem);

export default RutasRegister;
