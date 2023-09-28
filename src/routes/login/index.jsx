import './login.css'

import Logo from '../../assets/logo.png'

import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../context/auth'

export default function Login() {

    const { user, login, logout } = useContext(AuthContext)

    useEffect(() => {

    }, [])

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        login(usuario, senha)
    }


    function addUsuario(e) {
        setUsuario(e.target.value)
    }

    function addSenha(e) {
        setSenha(e.target.value)
    }

    return (
        <main className='flex items-center justify-center text-white h-screen'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-8 items-center justify-center bg-color-btn w-5/6 md:w-1/2 lg:w-1/3 rounded-2xl py-12'>
                <h1 className='text-5xl font-semibold'>LOGIN</h1>
                <div>
                    <Link to='/'><img src={Logo} className='h-10 md:h-12 lg:h-16' /></Link>
                </div>
                <div className='inputs'>
                    <label htmlFor="usuario">Email:</label>
                    <input placeholder='Email' onChange={addUsuario} id='usuario' type="text" />
                </div>

                <div className='inputs'>
                    <label htmlFor="senha">Senha</label>
                    <input placeholder='Senha' onChange={addSenha} id='senha' type="password" />
                </div>
                <button className=' text-white font-bold border border-white rounded-full px-2 py-0.5' type='submit'>Enviar</button>
                <Link to={'/cadastro'} className='underline'>Cadastre-se</Link>
            </form>
        </main>
    )
}