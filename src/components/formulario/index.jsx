import React from "react";

import "./formulario.css"

import CampoTexto from "../campoTexto";
import CampoSelect from "../campoSelect";

function Formulario() {
    return (
        <form>
            <h3>Preencha os dados para criar o card do colaborador.</h3>
            <CampoTexto label="Nome" id="nome" placeholder="Digite seu nome" />
            <CampoTexto label="Cargo" id="cargo" placeholder="Digite seu cargo" />
            <CampoTexto label="Imagem" id="imagem" placeholder="Informe o endereço da imagem" />
            <CampoSelect/>
            <button className="btn-criar">Criar card</button>
        </form>
    )
}

export default Formulario
