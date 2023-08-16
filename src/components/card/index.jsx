import React from "react";
import "./card.css"

function Card() {
    return (
        <div className="card">
            <h3>Preencha os dados para criar o card do colaborador.</h3>
            <div className="inputs">
                <label htmlFor="Nome">Nome</label>
                <input type="text" placeholder="Digite seu nome" id="Nome" />
            </div>
            <div className="inputs">
                <label htmlFor="Nome">Cargo</label>
                <input type="text" placeholder="Digite seu cargo" id="Nome" />
            </div>
            <div className="inputs">
                <label htmlFor="Nome">Imagem</label>
                <input type="text" placeholder="Informe o endereço da imagem" id="Nome" />
            </div>
            <div className="inputs">
                <label htmlFor="Nome">Time</label>
                <select name="" id=""></select>
            </div>
            <button className="btn-criar">Criar card</button>
        </div>
    )
}

export default Card;
