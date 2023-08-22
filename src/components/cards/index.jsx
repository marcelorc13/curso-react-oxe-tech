import React from "react";

import './card.css'

function Cards(props) {
    return (
        <div className="card">
            <img className="imagem" src={props.caminhoImagem} alt="" />
            <div className="decoracao-bg"></div>
            <p className="nome">
                {props.nome}
            </p>

            <p className="cargo">
                {props.cargo}
            </p>
        </div>
    )
}

export default Cards
