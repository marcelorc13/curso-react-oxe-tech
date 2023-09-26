import { useState, useEffect, useContext, createContext } from "react";

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {


    const [user, setUser] = useState()

    function login(usuario, senha) {
        setUser({
            usuario: usuario,
            senha: senha,
        })
        console.log(user)
    }

    function cadastrar(usuario, email, idade, senha) {
        setUser({
            usuario: usuario,
            email: email,
            idade: idade,
            senha: senha,
        })
        console.log(user)
    }

    function logout() {
        console.log('Logout')
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, cadastrar }}>
            <>{children}</>
        </AuthContext.Provider>
    )
}
