import type { Tareas } from "../types/task.types"

export const getTareas = () => {
  const url = 'http://localhost:3000/tasks'
  return fetch(url).then(res => res.json() as Promise<Tareas>).then(data => data)
}
