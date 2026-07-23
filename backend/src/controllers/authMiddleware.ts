import { Request, Response, NextFunction } from "express";

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];

  if (authHeader === "secreto123") {
    next();
  } else {
    res.status(401).send("Error no estas authorizado para entrar aqui!!");
    console.log("peticion deneganda acceso invalido");
  }
};
