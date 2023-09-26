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
    }, [])

    return (
        <main>
            <Navbar />
            <Banner />
            <div className="flex flex-col items-center justify-center py-40">
                <h1 className="text-4xl font-bold">Sobre</h1>
                {data.map((item) => {
                    return (
                        <div className="flex flex-col pb-4 items-center" key={item.cell} >
                            <p>{item.gender}</p>
                            <p>{item.name.first}</p>
                        </div>
                    )
                })}
            </div>
            <Footer />
        </main>
    )
}
