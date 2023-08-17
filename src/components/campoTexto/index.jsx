import React from "react";

import "./campoTexto.css"

function CampoTexto(props) {
    return (
            <div className="inputs">
                <label htmlFor="">{props.label}</label>
                <input type="text" placeholder={props.placeholder} id={props.id} />
            </div>
    )
}

export default CampoTexto
