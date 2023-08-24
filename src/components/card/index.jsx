function Card(props) {
    return (
        <div className="flex flex-col bg-white font-corpo pt-10 pb-4 mb-8 w-64 rounded-xl items-center drop-shadow-lg relative overflow-hidden">
            <img className="z-10" src={props.imagem} />
            <p className="font-bold text-color-btn text-lg mt-4">{props.nome}</p>
            <p className="mt-2 whitespace-normal w-8/12 text-center">{props.cargo}</p>
            <div className="bg-color-programacao absolute h-2/6 w-full z-0 top-0"></div>
        </div>
    )
}

export default Card
