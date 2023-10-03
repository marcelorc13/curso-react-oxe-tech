export default function Cards({foto, nome, email, idade, genero}) {

    let cor = null

    if(genero === 'male') {
        cor = {backgroundColor: 'lightblue'}
    }
    else {
        cor = {backgroundColor: 'pink'}
    }

    return (
        <div className="flex flex-col bg-white font-corpo pt-10 pb-4 mb-8 w-64 rounded-xl justify-center items-center drop-shadow-lg relative overflow-hidden">
            <img className="z-10 h-28 w-28 rounded-full" src={foto} />
            <p className="font-bold text-color-btn text-lg mt-4">{nome}</p>
            <p className="mt-2 whitespace-normal text-center px-2">{email}</p>
            <p className="">{idade}</p>
            <p className="">{genero}</p>
            <div style={cor} className="absolute h-2/6 w-full z-0 top-0"></div>
        </div>
    )
}