import React from "react";

import './times.css'
import Cards from "../cards";

function Times() {
    return (
        <div className="times-div">
            <h2>Programação</h2>
            <div className="cards-div">
                <Cards nome="Juliana Amoasei" caminhoImagem="./src/assets/fotos-perfil/foto-juliana.png" cargo="Desenvolvedora de software e instrutora" />
                <Cards nome="Daniel Artine" caminhoImagem="./src/assets/fotos-perfil/foto-daniel.png" cargo="Engenheiro de Software na Stone Age" />
                <Cards nome="Guilherme Lima" caminhoImagem="./src/assets/fotos-perfil/foto-guilherme.png" cargo="Desenvolvedor Python e JavaScript na Alura" />
                <Cards nome="Paulo Silveira" caminhoImagem="./src/assets/fotos-perfil/foto-paulo.png" cargo="Hipster e CEO da Alura" />
            </div>
        </div>
    )
}

export default Times
