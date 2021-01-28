import React from 'react'
import { IntRespostaDados } from '../../interfaces/resposta'

function Biografia(props: IntRespostaDados) {

  const {nome, ocupacao, resumo} = props.resp
  
    return (
        <div className="biografia">
        <h1>{nome}</h1>
        <div className="ocupacao">{ocupacao}</div>
        <p>{resumo}</p>
      </div>
        
    )
}

export default Biografia