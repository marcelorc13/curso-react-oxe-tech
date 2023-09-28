import { useEffect, useState } from "react";

import Navbar from "../../components/navbar";
import Banner from "../../components/banner";
import Footer from "../../components/footer";

import axios from "axios";

export default function Sobre() {

    const [data, setData] = useState([])

    async function HandleFetch() {
        await axios.get('https://randomuser.me/api/?results=20')
            .then((response) => {
                setData(response.data.results)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        HandleFetch()
        const sobre = document.querySelector('#sobre')
        sobre.classList.add('ativo')
    }, [])

    return (
        <main>
            <Navbar />
            <Banner />
            <div className="flex flex-col gap-6 items-center justify-center py-40">
                <h1 className="text-4xl font-bold">Sobre</h1>
                <div className="flex flex-col gap-6">
                    {data.map((item) => {
                        return (
                            <div className="flex flex-col items-center" key={item.cell} >
                                <p className="text-lg"><span className="font-bold">Gênero:</span> {item.gender}</p>
                                <p className="text-lg"><span className="font-bold">Nome:</span>{item.name.first}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </main>
    )
}
