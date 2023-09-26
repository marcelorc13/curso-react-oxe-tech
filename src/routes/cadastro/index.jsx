import '../login/login.css'

import Logo from '../../assets/logo.png'

import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../context/auth'

export default function Cadastro() {

    const { user, cadastrar } = useContext(AuthContext)

    useEffect(() => {

    }, [])

    const [usuario, setUsuario] = useState('')
    const [email, setEmail] = useState('')
    const [idade, setIdade] = useState('')
    const [senha, setSenha] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        cadastrar(usuario, email, idade, senha)
    }


    function addUsuario(e) {
        setUsuario(e.target.value)
    }

    function addEmail(e) {
        setEmail(e.target.value)
    }

    function addIdade(e) {
        setIdade(e.target.value)
    }

    function addSenha(e) {
        setSenha(e.target.value)
    }

    return (
        <main className='flex items-center justify-center text-white h-screen'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-8 items-center justify-center bg-color-btn w-5/6 md:w-1/2 rounded-2xl py-12'>
                <h1 className='text-5xl font-semibold'>CADASTRO</h1>
                <div>
                    <Link to='/'><img src={Logo} className='h-10 md:h-12 lg:h-16' /></Link>
                </div>

                <div className='inputs'>
                    <label htmlFor="usuario">Usuário:</label>
                    <input required placeholder='Nome do Usuário' onChange={addUsuario} id='usuario' type="text" />
                </div>

                <div className='inputs'>
                    <label htmlFor="usuario">Email:</label>
                    <input required placeholder='exemplo@email.com' onChange={addEmail} id='email' type="email" />
                </div>

                <div className='inputs'>
                    <label htmlFor="usuario">Idade:</label>
                    <input required placeholder='<18' onChange={addIdade} id='idade' type="text" />
                </div>

                <div className='inputs'>
                    <label htmlFor="senha">Senha:</label>
                    <input required placeholder='Senha' onChange={addSenha} id='senha' type="password" />
                </div>
                <button className=' text-white font-bold border border-white rounded-full px-2 py-0.5' type='submit'>Enviar</button>
                <Link to={'/login'} className='underline'>Ja tenho uma conta</Link>
            </form>
        </main>
    )
}