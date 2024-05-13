import './Campo.css'
export const Campo = (props) => {
    const placeholderModificada = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    return (
        <div className="campo">
            <label>{props.label}</label>
            <input value={props.value} onChange={aoDigitado} required={props.mandatory} placeholder={placeholderModificada}></input>
        </div>
    )
}