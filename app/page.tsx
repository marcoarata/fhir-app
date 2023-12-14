import React from 'react'


const Inicio = () => {
  return (
    <div className="container p-2 mx-auto sm:p-4 text-gray-800">
    <h2 className="mb-4 text-2xl font-semibold">Inicio</h2>
    <div className="overflow-x-auto rounded">
      <table className="w-full p-6 text-xs text-left whitespace-nowrap">
        <thead>
          <tr className="bg-gray-300">
            <th className="p-3">A-Z</th>
            <th className="p-3">Nombre</th>
            <th className="p-3">Trabajo</th>
            <th className="p-3">Teléfono</th>
            <th className="p-3">Email</th>
            <th className="p-3">Dirección</th>
            <th className="p-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="border-b bg-gray-50 border-gray-300">
          <tr>
            <td className="px-3 text-2xl font-medium text-gray-600">A</td>
            <td className="px-3 py-2">
              <p>Dwight Adams</p>
            </td>
            <td className="px-3 py-2">
              <span>Cirujano</span>
              <p className="text-gray-600">Spirit Media</p>
            </td>
            <td className="px-3 py-2">
              <p>555-873-9812</p>
            </td>
            <td className="px-3 py-2">
              <p>dwight@adams.com</p>
            </td>
            <td className="px-3 py-2">
              <p>71 Cherry Court, SO</p>
              <p className="text-gray-600">United Kingdom</p>
            </td>
            <td className="px-3 py-2">
              <button type="button" title="Ver Detalles" className="p-1 rounded-full text-gray-400 hover:bg-gray-300 focus:bg-gray-300">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                </svg>
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-3 text-2xl font-medium text-gray-600"></td>
            <td className="px-3 py-2">
              <p>Richie Allen</p>
            </td>
            <td className="px-3 py-2">
              <span>Técnico LAboratorio</span>
              <p className="text-gray-600">Icecorps</p>
            </td>
            <td className="px-3 py-2">
              <p>555-129-0761</p>
            </td>
            <td className="px-3 py-2">
              <p>richie@allen.com</p>
            </td>
            <td className="px-3 py-2">
              <p>Knesebeckstrasse 32, Obersteinebach</p>
              <p className="text-gray-600">Germany</p>
            </td>
            <td className="px-3 py-2">
              <button type="button" title="Ver Detalles" className="p-1 rounded-full text-gray-400 hover:bg-gray-300 focus:bg-gray-300">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
        <tbody className="border-b bg-gray-50 border-gray-300">
          <tr>
            <td className="px-3 text-2xl font-medium text-gray-600">B</td>
            <td className="px-3 py-2">
              <p>Alex Bridges</p>
            </td>
            <td className="px-3 py-2">
              <span>Servicios de Administración</span>
              <p className="text-gray-600">Smilectronics</p>
            </td>
            <td className="px-3 py-2">
              <p>555-238-9890</p>
            </td>
            <td className="px-3 py-2">
              <p>alex@bridges.com</p>
            </td>
            <td className="px-3 py-2">
              <p>Hooivelden 117, Kortrijk</p>
              <p className="text-gray-600">Belgium</p>
            </td>
            <td className="px-3 py-2">
              <button type="button" title="Ver Detalles" className="p-1 rounded-full text-gray-400 hover:bg-gray-300 focus:bg-gray-300">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                </svg>
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-3 text-2xl font-medium text-gray-600"></td>
            <td className="px-3 py-2">
              <p>Lynette Brown</p>
            </td>
            <td className="px-3 py-2">
              <span>Enfermera</span>
              <p className="text-gray-600">Surge Enterprises</p>
            </td>
            <td className="px-3 py-2">
              <p>555-521-5712</p>
            </td>
            <td className="px-3 py-2">
              <p>lynette@brown.com</p>
            </td>
            <td className="px-3 py-2">
              <p>22 rue de la Boétie, Poitiers</p>
              <p className="text-gray-600">France</p>
            </td>
            <td className="px-3 py-2">
              <button type="button" title="Ver Detalles" className="p-1 rounded-full text-gray-400 hover:bg-gray-300 focus:bg-gray-300">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
        <tbody className="border-b bg-gray-50 border-gray-300">
          <tr>
            <td className="px-3 text-2xl font-medium text-gray-600">C</td>
            <td className="px-3 py-2">
              <p>Mariah Claxton</p>
            </td>
            <td className="px-3 py-2">
              <span>Laboratorio</span>
              <p className="text-gray-600">White Wolf Brews</p>
            </td>
            <td className="px-3 py-2">
              <p>555-654-9810</p>
            </td>
            <td className="px-3 py-2">
              <p>mariah@claxton.com</p>
            </td>
            <td className="px-3 py-2">
              <p>R Oliveirinhas 71, Maia</p>
              <p className="text-gray-600">Portugal</p>
            </td>
            <td className="px-3 py-2">
              <button type="button" title="Ver Detalles" className="p-1 rounded-full text-gray-400 hover:bg-gray-300 focus:bg-gray-300">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                </svg>
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-3 text-2xl font-medium text-gray-600"></td>
            <td className="px-3 py-2">
              <p>Hermila Craig</p>
            </td>
            <td className="px-3 py-2">
              <span>Ingeniera</span>
              <p className="text-gray-600">Cavernetworks Co.</p>
            </td>
            <td className="px-3 py-2">
              <p>555-091-8401</p>
            </td>
            <td className="px-3 py-2">
              <p>hermila@craig.com</p>
            </td>
            <td className="px-3 py-2">
              <p>Rua da Rapina 89, Espeja</p>
              <p className="text-gray-600">Spain</p>
            </td>
            <td className="px-3 py-2">
              <button type="button" title="Ver Detalles" className="p-1 rounded-full text-gray-400 hover:bg-gray-300 focus:bg-gray-300">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
        <tbody className="border-b bg-gray-50 border-gray-300">
          <tr>
            <td className="px-3 text-2xl font-medium text-gray-600">D</td>
            <td className="px-3 py-2">
              <p>Mariah Claxton</p>
            </td>
            <td className="px-3 py-2">
              <span>Laboratorio</span>
              <p className="text-gray-600">White Wolf Brews</p>
            </td>
            <td className="px-3 py-2">
              <p>555-654-9810</p>
            </td>
            <td className="px-3 py-2">
              <p>mariah@claxton.com</p>
            </td>
            <td className="px-3 py-2">
              <p>R Oliveirinhas 71, Maia</p>
              <p className="text-gray-600">Portugal</p>
            </td>
            <td className="px-3 py-2">
              <button type="button" title="Ver Detalles" className="p-1 rounded-full text-gray-400 hover:bg-gray-300 focus:bg-gray-300">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                </svg>
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-3 text-2xl font-medium text-gray-600"></td>
            <td className="px-3 py-2">
              <p>Hermila Craig</p>
            </td>
            <td className="px-3 py-2">
              <span>Ingeniera</span>
              <p className="text-gray-600">Cavernetworks Co.</p>
            </td>
            <td className="px-3 py-2">
              <p>555-091-8401</p>
            </td>
            <td className="px-3 py-2">
              <p>hermila@craig.com</p>
            </td>
            <td className="px-3 py-2">
              <p>Rua da Rapina 89, Espeja</p>
              <p className="text-gray-600">Spain</p>
            </td>
            <td className="px-3 py-2">
              <button type="button" title="Ver Detalles" className="p-1 rounded-full text-gray-400 hover:bg-gray-300 focus:bg-gray-300">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
        <tbody className="border-b bg-gray-50 border-gray-300">
          <tr>
            <td className="px-3 text-2xl font-medium text-gray-600">E</td>
            <td className="px-3 py-2">
              <p>Mariah Claxton</p>
            </td>
            <td className="px-3 py-2">
              <span>Laboratorio</span>
              <p className="text-gray-600">White Wolf Brews</p>
            </td>
            <td className="px-3 py-2">
              <p>555-654-9810</p>
            </td>
            <td className="px-3 py-2">
              <p>mariah@claxton.com</p>
            </td>
            <td className="px-3 py-2">
              <p>R Oliveirinhas 71, Maia</p>
              <p className="text-gray-600">Portugal</p>
            </td>
            <td className="px-3 py-2">
              <button type="button" title="Ver Detalles" className="p-1 rounded-full text-gray-400 hover:bg-gray-300 focus:bg-gray-300">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                </svg>
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-3 text-2xl font-medium text-gray-600"></td>
            <td className="px-3 py-2">
              <p>Hermila Craig</p>
            </td>
            <td className="px-3 py-2">
              <span>Ingeniera</span>
              <p className="text-gray-600">Cavernetworks Co.</p>
            </td>
            <td className="px-3 py-2">
              <p>555-091-8401</p>
            </td>
            <td className="px-3 py-2">
              <p>hermila@craig.com</p>
            </td>
            <td className="px-3 py-2">
              <p>Rua da Rapina 89, Espeja</p>
              <p className="text-gray-600">Spain</p>
            </td>
            <td className="px-3 py-2">
              <button type="button" title="Ver Detalles" className="p-1 rounded-full text-gray-400 hover:bg-gray-300 focus:bg-gray-300">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
        <tbody className="border-b bg-gray-50 border-gray-300">
          <tr>
            <td className="px-3 text-2xl font-medium text-gray-600">F</td>
            <td className="px-3 py-2">
              <p>Mariah Claxton</p>
            </td>
            <td className="px-3 py-2">
              <span>Laboratorio</span>
              <p className="text-gray-600">White Wolf Brews</p>
            </td>
            <td className="px-3 py-2">
              <p>555-654-9810</p>
            </td>
            <td className="px-3 py-2">
              <p>mariah@claxton.com</p>
            </td>
            <td className="px-3 py-2">
              <p>R Oliveirinhas 71, Maia</p>
              <p className="text-gray-600">Portugal</p>
            </td>
            <td className="px-3 py-2">
              <button type="button" title="Ver Detalles" className="p-1 rounded-full text-gray-400 hover:bg-gray-300 focus:bg-gray-300">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                </svg>
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-3 text-2xl font-medium text-gray-600"></td>
            <td className="px-3 py-2">
              <p>Hermila Craig</p>
            </td>
            <td className="px-3 py-2">
              <span>Ingeniera</span>
              <p className="text-gray-600">Cavernetworks Co.</p>
            </td>
            <td className="px-3 py-2">
              <p>555-091-8401</p>
            </td>
            <td className="px-3 py-2">
              <p>hermila@craig.com</p>
            </td>
            <td className="px-3 py-2">
              <p>Rua da Rapina 89, Espeja</p>
              <p className="text-gray-600">Spain</p>
            </td>
            <td className="px-3 py-2">
              <button type="button" title="Ver Detalles" className="p-1 rounded-full text-gray-400 hover:bg-gray-300 focus:bg-gray-300">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
};

export default Inicio;