import React from "react"
import IntExperiencia from "../../interfaces/experiencia";
import { IntRespostaDados } from "../../interfaces/resposta";

function Experiencia(props: IntRespostaDados) {
    const { experiencia } = props.resp



    return (
    <>
            <div className="experience">
                <h2>Experiência Profissional</h2>
                {experiencia.map((item: IntExperiencia) => (
                <div className="experience-item">
                    <div>
                        <h4>{item.cargo}</h4>
                        <span>{item.periodo}</span>

                        <strong>{item.empresa}</strong>
                        <span>{item.local}</span>
                    </div>
                    <p>
                        {item.conteudo}
                    </p>
                </div>

                ))}  
      </div>
    </>
  )
}

export default Experiencia;