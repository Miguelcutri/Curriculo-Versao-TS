import React, { useState } from 'react';
import "./App.css"
import Foto from "./components/foto"
import Biografia from "./components/biografia/"
import Titulo from "./components/titulo"
import PerfilProfissional from "./components/perfilProfissional"
import Formação from "./components/formacao"
import Experiencia from "./components/experiencia"
import Botão from "./components/contatos/botao"
import { IntResposta} from  "./interfaces/resposta"
import { FileWatcherEventKind } from 'typescript';


function App() {

  const fakeAPI: IntResposta =
  {
    nome: 'Vitor Miguel Cutri',
    ocupacao: 'Front-end Developer React',
    resumo: 'Apaixonado por tecnologia, busco impactar e transformar o mundo ao meu redor. Além de sempre querer saber o porquê das coisas, adoro lidar com desafios e solucionar problemas. Busco todos os dias ser uma versão melhor de mim mesmo.',
    perfilProfissional: 'Comunicativo, proativo, criativo, curioso, líder ',
    contatos: [
      {
        id: 1,
        tipo: 'Telefone',
        contato: '19 99182-2381'
      },
      {
        id: 2,
        tipo: 'email',
        contato: 'Vitor.cutri@hotmail.com'
      }
    ],
    educacao: [
      {
        id: 1,
        instituicao: 'Universidade Unimetrocamp Wyden',
        curso: 'Análise e desenvolvimento de sistemas'
      },
      {
        id: 2,
        instituicao: 'Bootcamp Generation Brazil',
        curso: 'Desenvolvedor Java Full-stack Jr'
      },
      {
        id: 3,
        instituicao: 'Campinas Tech Talents',
        curso: 'Trilha de React - Ab Inbev'
      }
    ],
    experiencia: [
      {
        id: 1,
        cargo: 'Agente administrativo',
        periodo: 'Abril 2018 - Janeiro 2019',
        empresa: 'Ancoradouro Turismo',
        local: 'Campinas',
        conteudo: 'Cobrança, conciliação bancária, contas a pagar/receber, cotação e compra de materiais de escritório, resolução de problemas financeiros e administrativos.'
      },
      {
        id: 2,
        cargo: 'Arco administrativo',
        periodo: 'Abril 2017 - Abril 2018',
        empresa: 'Ancoradouro Turismo',
        local: 'Campinas',
        conteudo: 'Cobrança, baixa de fatura e notas fiscais, emissão de comprovantes, resolução de problemas administrativo em geral '
      }
    ]
  }
  const [resposta] = useState(fakeAPI)
 
  return (
    <>
      <main>
        <Foto />
        <Biografia resp={resposta}/>
        <Titulo/>
        <PerfilProfissional resp={resposta} />
        <aside>
        <div className="sidebar">
        <Botão resp={resposta} />
        </div>
          <Formação resp={resposta} />
        </aside>
        <Experiencia resp={resposta}/>
      </main>
    </>
  );
}

export default App;