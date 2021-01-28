import React, { useState } from 'react'
import IntContatos from '../../interfaces/contatos'
import { IntResposta, IntRespostaDados } from '../../interfaces/resposta'

function Contatos(prop: IntRespostaDados) {
  const { contatos } = prop.resp
  return (
    <>

      <div className="lista-de-contatos">
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
  
)
}
export default Contatos