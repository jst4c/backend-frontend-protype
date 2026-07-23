import { Response, Request } from "express";

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

let usuarios: User[] = [
  { id: 1, username: "pedro", email: "nas20@gmail.com", password: "otracosa" },
];

export const getRegister = (req: Request, res: Response) => {
  res.json(usuarios);
};

export const registerSystem = (req: Request, res: Response) => {
  console.log("Datos recibidos en el servidor:", req.body);
  const { email, password, username } = req.body;

  if (!email.includes("@")) {
    console.log("erro al crear usuario email falta @");
    return res.status(400).json({ error: "necesita @email" });
  }

  if (password.length <= 6) {
    console.log("error al crear contrasenia muy corta!");
    return res
      .status(400)
      .json({ error: "Contrasenia muy corta , debe tener alemos 7 digitos" });
  }

  const existeEmail = usuarios.find(
    (item) => item.email.toLocaleLowerCase() === email.toLocaleLowerCase(),
  );

  if (existeEmail) {
    console.log("el correo ingresado ya esta en uso");
    return res.status(409).json({ error: "el correto esta registrado" });
  }

  const newUser: User = {
    id: usuarios.length + 1,
    username: username,
    email: email,
    password: password,
  };

  usuarios.push(newUser);
  res.status(201).send("usuario creado");
};
