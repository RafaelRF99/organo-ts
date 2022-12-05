import './Time.css'

import Colaborador from '../Colaborador'

import { IColaborador } from '../../shared/interfaces/IColaborador'

interface TimeProps {
    corPrim: string
    corSecund: string
    nome: string
    colaboradores: IColaborador[]
}

const Time = (props: TimeProps ) => {
    const borda = { borderColor: props.corPrim }
    const fundo = { backgroundColor: props.corSecund }

    return (
        (props.colaboradores.length > 0) ? <section className='time' style={fundo}>
        <h3 style={borda}>{props.nome}</h3>
        <div className='colaboradores'>
            {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrim} key={colaborador.nome} 
            nome={colaborador.nome}
                cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
        </div>
    </section> : <></>
    )
}

export default Time;