import './Time.css'

import Colaborador from '../Colaborador'

const Time = (props) => {
    const fundo = { backgroundColor: props.corSecund }
    const borda = { borderColor: props.corPrim }

    return (
        <section className='time' style={fundo}>
            <h3 style={borda}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrim} key={colaborador.nome} 
                nome={colaborador.nome}
                    cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section>
    )
}

export default Time;