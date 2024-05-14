import './Formulario.css'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'



const Formulario = (props) => {


    const [name, setName] = useState('')
    const [cargo, setCargo] = useState('')
    const [image, setImage] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

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
                <Campo
                    mandatory={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    aoAlterado={value => setName(value)} />
                <Campo
                    mandatory={true} label="Cargo"
                    placeholder="Digite seu cargo"
                    value={cargo}
                    aoAlterado={value =>
                        setCargo(value)} />
                <Campo
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
            <form onSubmit={(evento) => {
                evento.preventDefault()
                props.cadastrarTime({ nome: nomeTime, cor: corTime })
            }}>
                <h2>Preencha os dados do novo time</h2>
                <Campo
                    mandatory
                    label="Nome"
                    placeholder="Digite o nome do time"
                    value={nomeTime}
                    aoAlterado={value => setNomeTime(value)}
                />
                <Campo
                    mandatory
                    type='color'
                    label="Cor"
                    placeholder="Digite a cor do time"
                    value={corTime}
                    aoAlterado={value =>
                        setCorTime(value)} />

                <Botao>Criar um novo time</Botao>
            </form>
        </section>
    )
}

export default Formulario