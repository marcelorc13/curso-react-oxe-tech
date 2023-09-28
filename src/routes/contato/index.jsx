import { useEffect } from "react";

import Navbar from "../../components/navbar";
import Banner from "../../components/banner";
import Footer from "../../components/footer";

export default function Contato() {

    useEffect(() => {
    const contato = document.querySelector('#contato')
    contato.classList.add('ativo')
    }, [])


    return (
        <main>
            <Navbar />
            <Banner />
            <div className="flex items-center justify-center py-40">
                <h1 className="text-4xl font-bold">Contato</h1>
            </div>
            <Footer />
        </main>
    )
}