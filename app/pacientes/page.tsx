'use client'

import React from 'react';
import { useEffect, useState } from "react";


const BASE_URL = "http://hapi.fhir.org/baseR4";


interface Bundle {
  entry: Paciente[]
}

interface Paciente {
  resource: {
    active: boolean,
    gender: string,
    birthDate: string,
    id: string
    name: [
      {
        family: string,
        given: string[],
        prefix: string[]
      }
    ]
  }
}


const Pacientes = () => {
    const [pacientes, setPacientes] = useState<Bundle>({entry: []});

    useEffect(() => {
      fetch(BASE_URL+"/Patient", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setPacientes(data);
          console.log(data);
        })
        .catch((error) => console.log(error));
    }, []);
  

  // Web
  return (
    <div className="container p-2 mx-auto sm:p-4 text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold">Pacientes</h2>
          <div className="overflow-x-auto rounded">
            <table className="w-full p-6 text-xs text-left whitespace-nowrap">
              <thead>
                <tr className="bg-gray-300">
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    id
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Nombre
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">Ver</th>
                </tr>
              </thead>
              <tbody>
                {pacientes.entry.map((paciente) => {
                  return <tr key={paciente.resource.id} className="bg-gray-100 border-b"><td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{paciente.resource.id}</td><td className="text-sm font-medium text-gray-900 px-6 py-4 whitespace-nowrap">{paciente.resource.name !=null && paciente.resource.name[0].given}</td><td className="flex flex-col items-center px-3 py-2">
              <button type="button" title="Ver detalles" className="p-1 rounded-full text-gray-500 hover:bg-gray-300 focus:bg-gray-300">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                </svg>
              </button>
            </td></tr>;
                })}
              </tbody>
            </table>
          </div>
    </div>
  )
};

export default Pacientes;