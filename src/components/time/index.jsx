import Card from "../card"

function Time() {
    return (
        <div className="bg-color-bg-programacao flex flex-col mb-40 items-center">
            <h1 className="font-titulo text-3xl mt-6 mb-12">Programação</h1>
            <div className="flex flex-row justify-center gap-5">   
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Time
