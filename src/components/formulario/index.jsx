import InputsTexto from "../inputsTexto"
import InputSelect from "../inputSelect"

import { useState } from "react"

function criarCard(e) {
    e.preventDefault()
}

function Formulario() {

    return (
        <form onSubmit={criarCard} className="bg-color-form flex flex-col items-center mx-36 my-16 rounded-2xl shadow-lg gap-6">
            <h1 className="font-titulo text-3xl my-6 ms-20 self-start">
                Preencha os dados para criar o card do colaborador.
            </h1>

            <InputsTexto
                id="inputNome"
                label="Nome"
                placeholder="Digite seu nome"
            />

            <InputsTexto
                id="inputCargo"
                label="Cargo"
                placeholder="Digite seu cargo"
            />

            <InputsTexto
                id="inputImagem"
                label="Imagem"
                placeholder="Informe o endereço da imagem"
            />

            <InputSelect />

            <input type="submit"
                value="Criar Card"
                className="font-corpo font-bold cursor-pointer text-xl text-white ms-20 my-6 self-start bg-color-btn hover:text-color-btn-hover transition duration-150 h-20 w-44 rounded-xl " />
        </form>
    )
}

export default Formulario
