import React from 'react'
import IntFormacao from '../../interfaces/formacao'
import { IntRespostaDados } from '../../interfaces/resposta'

function Formação(prop: IntRespostaDados) {
    const { educacao } = prop.resp
    return (
        <div className="sidebar">
            <h3>Educação</h3>
            <div className="lista-de-formacao">
                {educacao.map((item: IntFormacao)  => (
                   <li key={item.id}>
                   <h4>{item.instituicao}</h4>
                   <p>{item.curso}</p>
               </li> 
                ))}

            </div>
        </div>
    )
}

export default Formação