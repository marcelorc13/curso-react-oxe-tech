import './navbar.css'

import { Link } from "react-router-dom"

import Logo from '../../assets/logo.png'

export default function Navbar() {
    return (
        <nav className="flex flex-row justify-between items-center top-0 right-0 left-0 bg-color-btn border-b-2 border-white px-12 text-white text-xl font-semibold">
            <div className="py-4">
                <Link to='/'><img src={Logo} /></Link>
            </div>
            <ul id='lista-nav' className="flex flex-row gap-8">
                <li id="home">
                    <Link to='/'>Home</Link>
                </li>

                <li id="sobre">
                    <Link to='/sobre'>Sobre</Link>
                </li>

                <li id="contato">
                    <Link to='/contato'>Contato</Link>
                </li>
            </ul>
            <div id='login'>
                <Link to='/login'>Login</Link>
            </div>
        </nav>
    )
}