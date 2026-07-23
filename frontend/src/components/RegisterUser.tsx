import { useState } from "react"
import type { User } from "../types/user.types"


export const RegisterUser = () => {
  const [dataForm, setDataForm] = useState<User>({
    username: '',
    email: '',
    password: '',
  })
  const [message , setMessage] = useState<string | null>(null)

  const formHandler = async (e:React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!dataForm.email.trim() || !dataForm.password.trim() || !dataForm.username.trim()) return
    /*
    if (!dataForm.email.includes('@')) {
      setMessage('a tu correo le falta el @')
      return
    }
    */

    try {
      const res = await fetch('http://localhost:3000/register', {
        method: 'POST', headers: {
        'Content-Type' : 'application/json'
        },
        body: JSON.stringify(dataForm)
      })

      const data = await res.json()
      if (!res.ok) {
        setMessage(data.error)
        return
      }
      setDataForm(data)

    } catch (err) {
      console.error('error al mandar datos', err)

    }
    setDataForm({
      email: '',
      password: '',
      username: ''
    })
    setMessage('formulario enviado correctamente')
  }

  const eventosDeCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name , value} = e.target
    setDataForm({
      ...dataForm,
      [name]:value
    })
  }

  return (
    <div className="max-w-10xl bg-yellow-100 h-2/4 p-4 flex " >
      <form onSubmit={formHandler} className=" bg-gray-800 text-white flex items-center justify-center flex-1 gap-3 flex-col flex-">
        <div>

        <label htmlFor="username">
          Username:
          <input placeholder="username" name="username" type="text" className="border bg-fuchsia-200-300 rounded-xs text-white font-bold" value={dataForm.username}  onChange={eventosDeCambio}  / >
        </label>

        </div>

        <div>

        <label htmlFor="email" >
          Email:
          <input placeholder="Email" name="email" type="text" className="border bg-fuchsia-200-300 rounded-xs text-white font-bold" value={dataForm.email} onChange={eventosDeCambio} / >
        </label>
        </div>

        <div>

        <label htmlFor="password">
          Password:
          <input placeholder="Password" name="password" type="text" className="border bg-fuchsia-200-300 rounded-xs text-white font-bold"  value={dataForm.password} onChange={eventosDeCambio} / >
        </label>
        </div>

        <p> status: {message} </p>

        <button type="submit" className="p-4 rounded-xs bg-blue-200 text-white font-bold hover:bg-black cursor-pointer" > Registrar </button>
      </form>

    </div>

  )




}
