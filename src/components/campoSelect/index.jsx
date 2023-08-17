import React from "react";

import "./campoSelect.css"

function CampoSelect() {
    return (
        <div className="inputs">
            <label htmlFor="times">Time</label>
            <select id="times">
                <option value="">Programação</option>
                <option value="">Front-End</option>
                <option value="">Data Science</option>
                <option value="">Devops </option>
                <option value="">UX e Design</option>
                <option value="">Mobile</option>
                <option value="">Inovação e Gestão</option>
            </select>
        </div>
    )
}

export default CampoSelect