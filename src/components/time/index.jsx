import Card from "../card"

function Time(props) {

    const cssFundo = { backgroundColor: props.fundo }
    const cssCard = { backgroundColor: props.card }

    return (

        (props.colaboradores.length > 0) ?

        <section className="flex flex-col mb-10 items-center"
            style={cssFundo} >
            <h1 className="font-titulo text-3xl mt-6 mb-12">
                {props.nome}
                <div style={cssCard} className="mx-auto mt-3 h-1 w-6"></div>
            </h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-center gap-5">
                {props.colaboradores.map(
                    colaborador => <Card
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        imagem={colaborador.imagem}
                        cargo={colaborador.cargo}
                        bgCard={cssCard}
                    />)}
            </div>
        </section>

        :''
    )
}

export default Time
