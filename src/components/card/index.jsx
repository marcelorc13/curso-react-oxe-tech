function Card({nome, cargo, imagem, bgCard}) {
    return (
        <div className="flex flex-col bg-white font-corpo pt-10 pb-4 mb-8 w-64 rounded-xl items-center drop-shadow-lg relative overflow-hidden">
            <img className="z-10 h-28 w-28 rounded-full" src={imagem} />
            <p className="font-bold text-color-btn text-lg mt-4">{nome}</p>
            <p className="mt-2 whitespace-normal w-8/12 text-center">{cargo}</p>
            <div className="absolute h-2/6 w-full z-0 top-0" style={bgCard}></div>
        </div>
    )
}

export default Card
