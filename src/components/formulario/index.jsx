import React from "react";

import "./formulario.css"

import CampoTexto from "../campoTexto";
import CampoSelect from "../campoSelect";

function handleAdd(e) {
    e.preventDefault()
    
    const nome = document.querySelector('#nome')
    const cargo = document.querySelector('#cargo')
    const imagem = document.querySelector('#imagem')
    const select = document.querySelector('#times')
    
    console.log(nome.value) 
    console.log(cargo.value)
    console.log(imagem.value)
    console.log(select.value)
}

function Formulario() {
    return (
        <form onSubmit={handleAdd}>
            <h3>Preencha os dados para criar o card do colaborador.</h3>
            <CampoTexto label="Nome" id="nome" placeholder="Digite seu nome" />
            <CampoTexto label="Cargo" id="cargo" placeholder="Digite seu cargo" />
            <CampoTexto label="Imagem" id="imagem" placeholder="Informe o endereço da imagem" />
            <CampoSelect id="times"/>
            <input type="submit" value="Criar Card" className="btn-criar" />
        </form>
    )
}

export default Formulario
