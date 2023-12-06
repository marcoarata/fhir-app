'use client'

import React from 'react';
import { useEffect, useRef, useState } from "react";


const BASE_URL = 'https://hapi.fhir.org/baseR4';


interface Paciente {
    active: boolean,
    gender: string,
    birthDate: string,
    id: string
}


//

const Pacientes = () => {
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [pacientes, setPacientes] = useState<Paciente[]>([]);
  
    const abortControllerRef = useRef<AbortController | null>(null);

    useEffect(() => {
        const fetchPacientes = async () => {
          abortControllerRef.current?.abort();
          abortControllerRef.current = new AbortController();
    
          setIsLoading(true);
    
          try {
            const response = await fetch(`${BASE_URL}/Patient`, {
              signal: abortControllerRef.current?.signal,
            });
            const pacientes = (await response.json()) as Paciente[];
            setPacientes(pacientes);
          } catch (e: any) {
            if (e.name === "AbortError") {
              console.log("Aborted");
              return;
            }
    
            setError(e);
          } finally {
            setIsLoading(false);
          }
        };
    
        fetchPacientes();
      });
    
      if (error) {
        return <div>Something went wrong! Please try again.</div>;
      };

    // Web
  return (
    <div className="tutorial">
      <h1 className="mb-4 text-2xl">Data Fething in React</h1>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <ul>
          {pacientes.map((paciente) => {
            return <li key={paciente.id}>{paciente.active}</li>;
          })}
        </ul>
      )}
    </div>
    
  )
};

export default Pacientes;


// import getPacientes from "../libs/getPacientes"

// export default async function PacientesPage() {
//   const pacientes = await getPacientes()
//   return (
//     <div>
//       <h1>Pacientes</h1>
//       {pacientes.map((paciente: any) => {
//         return (
//           <>
//           <p key={paciente.id}>
//             {paciente.active}
//           </p>
//           </>
//         )
//       })}
//     </div>
//   )
// }
