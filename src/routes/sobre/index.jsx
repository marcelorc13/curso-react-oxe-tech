import { useEffect } from "react";
import Banner from "../../components/banner";
import Footer from "../../components/footer";


export default function Sobre() {

    useEffect(() => {
       window.scrollTo(0,0)
    }, [])

    return (
        <main>
            <Banner />
            <div className="flex items-center justify-center py-40">
                <h1  className="text-4xl font-bold">Sobre</h1>
            </div>
            <Footer />
        </main>
    )
}