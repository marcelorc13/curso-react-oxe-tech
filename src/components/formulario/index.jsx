import InputsTexto from "../inputsTexto"
import InputSelect from "../inputSelect"

import { useState } from "react"

function Formulario(props) {
    const [valores, setValores] = useState({
        nome: '',
        cargo: '',
        imagem: '',
        time: '',
    })

    function onChange(e) {
        const { name, value } = e.target
        setValores((prev) => {
            return { ...prev, [name]: value }
        })
    }

    function handleAdd (e) {
        e.preventDefault()
        props.colaboradorCadastrado(
            valores
        )
    }

    return (
        <form onSubmit={handleAdd} className="bg-color-form flex flex-col items-center lg:mx-36 my-16 rounded-2xl shadow-lg gap-6">
            <h1 className="font-titulo text-3xl my-6 mx-10 lg:mx-20  self-start">
                Preencha os dados para criar o card do colaborador.
            </h1>

            <InputsTexto
                onChange={onChange}
                name="nome"
                id="inputNome"
                label="Nome"
                placeholder="Digite seu nome"
            />

            <InputsTexto
                onChange={onChange}
                name="cargo"
                id="inputCargo"
                label="Cargo"
                placeholder="Digite seu cargo"
            />

            <InputsTexto
                onChange={onChange}
                name="imagem"
                id="inputImagem"
                label="Imagem"
                placeholder="Informe o endereço da imagem"
            />

            <InputSelect
                onChange={onChange}
                name="time"
                times={props.times}
                id="time"
                placeholder="Selecione seu Time" />

            <input type="submit"
                value="Criar Card"
                className="font-corpo font-bold cursor-pointer text-xl text-white ms-20 my-6 self-start bg-color-btn hover:text-color-btn-hover transition duration-150 h-20 w-44 rounded-xl " />
        </form>
    )
}

export default Formulario
