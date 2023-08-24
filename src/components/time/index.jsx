import Card from "../card"

function Time() {
    return (
        <div className="bg-color-bg-programacao flex flex-col mb-40 items-center">
            <h1 className="font-titulo text-3xl mt-6 mb-12">Programação</h1>
            <div className="grid lg:grid-flow-col justify-center gap-5">
                <Card
                    nome="Juliana Amoasei"
                    cargo="Desenvolvedora de software e instrutora"
                    imagem="./src/assets/fotos-perfil/foto-juliana.png" />

                <Card
                    nome="Daniel Artine"
                    cargo="Engenheiro de Software na Stone Age"
                    imagem="./src/assets/fotos-perfil/foto-daniel.png" />

                <Card
                    nome="Guilherme Lima"
                    cargo="Desenvolvedor Python e JavaScript na Alura"
                    imagem="./src/assets/fotos-perfil/foto-guilherme.png" />

                <Card
                    nome="Paulo Silveira"
                    cargo="Hipster e CEO da Alura"
                    imagem="./src/assets/fotos-perfil/foto-paulo.png" />
            </div>
        </div>
    )
}

export default Time
