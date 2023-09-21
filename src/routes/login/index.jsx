import './login.css'

import Logo from '../../assets/logo.png'

import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../context/auth'

export default function Login() {

    const { logado } = useContext(AuthContext)

    useEffect(() => {
        
    }, [])

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        console.log(usuario, senha)
    }

    function addUsuario(e) {
        setUsuario(e.target.value)
    }

    function addSenha(e) {
        setSenha(e.target.value)
    }

    return (
        <main className='flex items-center justify-center text-white h-screen'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-8 items-center justify-center bg-color-btn w-2/3 md:1/2 lg:w-1/3 rounded-2xl py-12'>
                <div>
                    <Link to='/'><img src={Logo} /></Link>
                </div>
                <div className='inputs'>
                    <label htmlFor="usuario">Usuário</label>
                    <input onChange={addUsuario} id='usuario' type="text" />
                </div>

                <div className='inputs'>
                    <label htmlFor="senha">Senha</label>
                    <input onChange={addSenha} id='senha' type="password" />
                </div>
                <button className=' text-white font-bold border border-white rounded-full px-2 py-0.5' type='submit'>Enviar</button>
            </form>
        </main>
    )
}