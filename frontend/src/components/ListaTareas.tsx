import { useEffect, useState } from "react"
import type { Tareas } from "../types/task.types"
import { ApiUrl } from "../mocks/API.URL"
import { ItemsRender } from "./ItemsRender"


export const ListaTareas = () => {
// estado para guardar ListaTareas
  const [tarea, setTarea] = useState<Tareas[]>([])

  const fetchTask = async () => {
    try {
      const response = await fetch(ApiUrl)
      const data = await response.json()
      setTarea(data)
    } catch (err) {
      console.error('error de data, ' ,err)
    }
  }

  const handleDeleteTask = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:3000/tasks/${id}`, { method: 'DELETE' });
      const data = await res.json()
      if (res.ok) {
        setTarea(data)
      }
    } catch (err) {
      console.error('Error al borrar la tarea:', err);
    }
  };

  const handleToggleComplete = async (id: number) => {

    try {
      const response = await fetch(`http://localhost:3000/tasks/${id}` , {method : 'PATCH'})
      const data = await response.json()

      if (response.ok) {
        setTarea(data)
      }


    } catch (err) {
      console.log('peticion invalida', err)
    }
  }


  useEffect(() => {
    fetchTask()

  }, [])

  return (
    <div  >
      {
        tarea.map((item) =>
          <div key={item.id} >
            <ItemsRender item={item} onDelete={handleDeleteTask} onComplete={handleToggleComplete}  />
          </div>
        )
        }
    </div>
  )
}
