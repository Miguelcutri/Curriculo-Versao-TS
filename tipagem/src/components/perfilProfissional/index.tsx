import React from 'react'
import { IntRespostaDados } from '../../interfaces/resposta'

function perfilProfissional(props: IntRespostaDados){
  const {perfilProfissional} = props.resp
    return(
        <div className="perfil-profissional">
        <p>
        {perfilProfissional}
        </p>
      </div>
    )
}

export default perfilProfissional
