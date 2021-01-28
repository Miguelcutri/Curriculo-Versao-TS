import IntBiografia from './biografia'
import IntContatos from './contatos'
import IntExperiencia from './experiencia'
import IntFormacao from './formacao'
import IntPerfilProfissional from './perfilProfissional'

export interface IntResposta{
    nome: string,
    ocupacao: string,
    resumo: string,
    perfilProfissional: string,
    contatos: IntContatos[],
    educacao: IntFormacao[],
    experiencia: IntExperiencia[]
}

export interface IntRespostaDados{
    resp: IntResposta
}