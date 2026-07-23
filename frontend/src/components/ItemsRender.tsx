import type { Tareas } from "../types/task.types"

interface Props {
  item: Tareas
  onDelete: (id: number) => void
  onComplete: (id: number) => void
}
export const ItemsRender = ({item , onDelete , onComplete } : Props) => {

  return (
    <div className="flex  items-center justify-around gap-2 p-1 rounded-2xl hover:bg-orange-600/30 cursor-pointer">
      <p className="flex-1">
      {item.completed ? <p className="text-green-500">{item.title}</p> : <p className="text-red-600"> {item.title} </p>}
      </p>

      <span>

        <div   className="border bg-red-950  ">
          { item.completed ? <button className="bg-green-500 p-2  text-white">Completado</button> : <button onClick={()=> onComplete(item.id) } className=" p-2  bg-red-500">Incompleto</button> }
        </div>
      </span>

        <span>
       <button className="border border-pink-400 rounded-full px-6 py-2 text-pink-300 hover:bg-pink-500 hover:text-white" onClick={()=> onDelete(item.id)} >Delete </button>
      </span>

    </div>
  )

}
