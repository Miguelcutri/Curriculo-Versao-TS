import React, { useState } from 'react'
import IntContatos from '../../interfaces/contatos'
import { IntResposta, IntRespostaDados } from '../../interfaces/resposta'


function Botão(prop: IntRespostaDados) {
    const { contatos } = prop.resp
    const [mostraContato, AddMostraContato] = useState(false)
    
    const mostrar = () => {
        AddMostraContato(true)
    }
  
    return (
        <>

            <h3>Contatos</h3>

            <button onClick={mostrar}>Mostrar Contatos</button>
            
            {
                mostraContato && <> <div className="lista-de-contatos">
                {contatos.map((item: IntContatos) => (
                  <li key={item.id}>
                    <div className="item-contato">
                      <h4>{item.tipo}</h4>
                      <p> {item.contato}</p>
                    </div>
                  </li>
                ))}
              </div>
            </>
            }
        </>

    )
}
export default Botão