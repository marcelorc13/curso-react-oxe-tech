import { useEffect, useState } from "react";

import Navbar from "../../components/navbar";
import Banner from "../../components/banner";
import Footer from "../../components/footer";

import axios from "axios";
import Cards from "../../components/cards";

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
                <h2 className="text-2xl font-semibold">API de Pessoas Aleatórias:</h2>
                <div className="flex flex-row justify-center flex-wrap gap-6 px-16">
                    {data.map((item) => {
                        return (
                            <Cards
                            key={item.cell}
                            foto={item.picture.medium}
                            nome={item.name.first}
                            email={item.email}
                            idade={item.dob.age}
                            genero={item.gender}
                             />
                        )
                    })}
                </div>
            </div>
            <Footer />
        </main>
    )
}
