//controllador de rutas

import { Request, Response } from 'express';

export const getUser = (req: Request , res: Response) => {
  res.send('hola aqui esta la lista de usuarios')
}
