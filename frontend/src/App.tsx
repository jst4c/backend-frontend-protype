import { useState } from "react"
import { ListaTareas } from "./components/ListaTareas"
import { AddTarea } from "./components/AddTarea"
import { RegisterUser } from "./components/RegisterUser"

function App() {
  const [refrescarKey, setRefreshKey] = useState(0)

  const manejadorTareasCreadas = () => {
    setRefreshKey(prev => prev + 1)
  }



  return (
    <div className="bg-blue-950 h-screen text-center ">
      <h1 className="text-2xl text-red-300 font-bold">
        <ListaTareas key={refrescarKey} />
      </h1>

      <AddTarea creandoTareas={manejadorTareasCreadas} />

       <RegisterUser/>



    </div>
  )
}

export default App
