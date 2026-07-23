import { useState } from "react"
import { ApiUrl } from "../mocks/API.URL"

interface TareasFromProps {
  creandoTareas : () => void
}

export const AddTarea = ({creandoTareas} : TareasFromProps) => {
  const [title, setTitle] = useState('')

  const manejadorSubmit = async (e : React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!title.trim()) return

    try {
      const response = await fetch(ApiUrl, {
        method: 'POST',
        headers: {
        "Content-Type" : 'application/json'
        },
        body: JSON.stringify({ title })
      })
      if (response.ok) {
        setTitle('')
        creandoTareas()
    }
    } catch (err) {
      console.error('error al mandar data ', err)
    }
  }
  return (
    <form className="p-4" onSubmit={manejadorSubmit} >
      <input className="p-4 bg-amber-50 rounded-2xl" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="NuevaTarea" />
      <button className="bg-red-300/30" type="submit">Enviar Tarea</button>
    </form>

  )
}
