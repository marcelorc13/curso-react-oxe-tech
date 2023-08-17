import React from "react";
import "./card.css"

function Card() {
    return (
        <div className="card">
            <h3>Preencha os dados para criar o card do colaborador.</h3>
            <div className="inputs">
                <label htmlFor="nome">Nome</label>
                <input type="text" placeholder="Digite seu nome" id="nome" />
            </div>
            <div className="inputs">
                <label htmlFor="cargo">Cargo</label>
                <input type="text" placeholder="Digite seu cargo" id="cargo" />
            </div>
            <div className="inputs">
                <label htmlFor="imagem">Imagem</label>
                <input type="text" placeholder="Informe o endereço da imagem" id="imagem" />
            </div>
            <div className="inputs">
                <label htmlFor="times">Time</label>
                <select name="" id="times">
                    <option value="">Programação</option>
                    <option value="">Front-End</option>
                    <option value="">Data Science</option>
                    <option value="">Devops </option>
                    <option value="">UX e Design</option>
                    <option value="">Mobile</option>
                    <option value="">Inovação e Gestão</option>
                </select>
            </div>
            <button className="btn-criar">Criar card</button>
        </div>
    )
}

export default Card;
