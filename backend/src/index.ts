import express, { Request, Response } from "express";
import router from "./routes/userRoutes";
import { logger } from "./middlewares/loggerMiddleware";
import routas from "./routes/taskRouter";
import cors from "cors";
import RutasRegister from "./routes/usuarios.routes";

const app = express();

const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("server abierto Como tu OGT");
});

app.listen(port, () => {
  console.log(`server is started on port http://locahost:${port}`);
});

app.use(cors());
app.use(express.json());

app.use(logger);
app.use(router);
app.use(routas);
app.use(RutasRegister);
