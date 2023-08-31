import Card from "../card"

function Time(props) {

    const cssFundo = {backgroundColor: props.fundo}
    const cssCard = {backgroundColor: props.card}

    return (
        <div className="flex flex-col mb-40 items-center"
        style={cssFundo} >
            <h1 className="font-titulo text-3xl mt-6 mb-12">
                {props.nome}
                <div style={cssCard} className="mx-auto mt-3 h-1 w-6"></div>
            </h1>
            <div className="grid lg:grid-flow-col justify-center gap-5">
                <Card
                    nome='Juliana Amoasei'
                    cargo='Desenvolvedora de software e instrutora'
                    imagem="./src/assets/fotos-perfil/foto-juliana.png"
                    bgCard={cssCard} />

                <Card
                    nome='Daniel Artine'
                    cargo='Engenheiro de Software na Stone Age'
                    imagem="./src/assets/fotos-perfil/foto-daniel.png" 
                    bgCard={cssCard} />

                <Card
                    nome='Guilherme Lima'
                    cargo='Desenvolvedor Python e JavaScript na Alura'
                    imagem="./src/assets/fotos-perfil/foto-guilherme.png" 
                    bgCard={cssCard} />

                <Card
                    nome='Paulo Silveira'
                    cargo='Hipster e CEO da Alura'
                    imagem="./src/assets/fotos-perfil/foto-paulo.png" 
                    bgCard={cssCard} />
            </div>
        </div>
    )
}

export default Time
