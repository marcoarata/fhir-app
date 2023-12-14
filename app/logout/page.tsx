import React from 'react'

const logout = () => {
  return (
        <div className="absolute h-full w-full flex items-center justify-center text-center bg-gray-900 text-gray-100">
        <form action="" className="flex flex-col w-full max-w-lg p-12 m-12 rounded-lg shadow-2xl bg-gray-800 text-gray-100">
            <label className="self-start text-xs font-semibold">Usuario</label>
            <input id="username" type="text" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ri text-gray-900 focus:border-sky-400 focus:ri" />
            <label className="self-start mt-3 text-xs font-semibold">Contraseña</label>
            <input id="password" type="password" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ri text-gray-900 focus:border-sky-400 focus:ri" />
            <button type="submit" className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded text-gray-900 bg-sky-400">Acceder</button>
        </form>
    </div>
  )
}

export default logout