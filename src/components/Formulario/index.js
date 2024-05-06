import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'



const Formulario = (props) => {


    const [name, setName] = useState('')
    const [cargo, setCargo] = useState('')
    const [image, setImage] = useState('')
    const [time, setTime] = useState('')

    const onSave = (evento) => {
        evento.preventDefault()
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            name,
            cargo,
            image,
            time
        })
        setName('')
        setCargo('')
        setImage('')
        setTime('')
    }
    return (
        <section className="formulario">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    mandatory={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    aoAlterado={value => setName(value)} />
                <CampoTexto
                    mandatory={true} label="Cargo"
                    placeholder="Digite seu cargo"
                    value={cargo}
                    aoAlterado={value =>
                        setCargo(value)} />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da image"
                    value={image}
                    aoAlterado={value => setImage(value)} />
                <ListaSuspensa
                    mandatory={true} label="Time"
                    itens={props.times}
                    value={time}
                    aoAlterado={value => setTime(value)} />
                <Botao>Criar Card</Botao>

            </form>
        </section>
    )
}

export default Formulario