import './Campo.css'
export const Campo = ({ type = 'text', label, placeholder, value, aoAlterado, mandatory }) => {
    const placeholderModificada = `${placeholder}...`

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }
    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={aoDigitado}
                required={mandatory}
                placeholder={placeholderModificada} />
        </div>
    )
}