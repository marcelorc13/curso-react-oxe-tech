import React from "react";

import Times from "../times";
import './organizacao.css'


function Organizacao() {
    return (
        <div className="organizacao-div">
            <div className="titulo-div">
                <h1>Minha Organização:</h1>
                <img src="./src/assets/btn-add.png" className="btn-add" />
            </div>
            <Times />
        </div>
    )
}

export default Organizacao
