import { Request, Response } from "express";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

let tareas: Task[] = [
  { id: 1, title: "aprendercosas de ts", completed: true },
  { id: 2, title: "conectar frontend con fetch", completed: false },
];

export const getTasks = (req: Request, res: Response) => {
  res.json(tareas);
};

export const createTask = (req: Request, res: Response) => {
  const { title } = req.body;

  const newTask = {
    id: tareas.length + 1,
    title: title,
    completed: false,
  };

  tareas.push(newTask);
  res.status(201).json(newTask);
};

export const eliminarTarea = (req: Request, res: Response) => {
  const idParaEliminar = Number(req.params.id);
  tareas = tareas.filter((item) => item.id !== idParaEliminar);
  res.status(204).json(tareas);
};

export const CompletarTarea = (req: Request, res: Response) => {
  const idParaCompletar = Number(req.params.id);

  tareas = tareas.map((item) => {
    if (item.id === idParaCompletar) {
      return {
        ...item,
        completed: !item.completed,
      };
    }
    return item;
  });

  res.status(200).json(tareas);
};
