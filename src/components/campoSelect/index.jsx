import React from "react";

import "./campoSelect.css"

function CampoSelect(props) {
    return (
        <div className="inputs">
            <label htmlFor="times">Time</label>
            <select id={props.id}>
                <option value="Programação">Programação</option>
                <option value="Front-End">Front-End</option>
                <option value="Data Science">Data Science</option>
                <option value="Devops">Devops </option>
                <option value="UX e Design">UX e Design</option>
                <option value="Mobile">Mobile</option>
                <option value="Inovação e Gestão">Inovação e Gestão</option>
            </select>
        </div>
    )
}

export default CampoSelect