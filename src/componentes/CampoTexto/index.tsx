import './CampoTexto.css'

interface CampoTextoProps {
    aoAlterado: (valor: string) => void
    label: string
    valor: string
    placeholder: string
    obrigatorio?: boolean
}


const CampoTexto = ({ aoAlterado, label, placeholder, valor, obrigatorio = false }: CampoTextoProps ) => {

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input value={valor} onChange={aoDigitado} 
            required={obrigatorio} placeholder={placeholder} />
        </div>
    );
};
export default CampoTexto;