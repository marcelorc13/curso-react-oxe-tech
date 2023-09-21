import { useState, useEffect, useContext, createContext } from "react";

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {


    const [user, setUser] = useState([
        {
            nome: 'marcelo',
            email: 'marcelorcarnauba@gmail.com',
            idade: '18'
        }
    ])
    const [signed, setSigned] = useState(false)

    function logar(usuario, senha) {

    }

    return (
        <AuthContext.Provider value={signed}>
            {children}
        </AuthContext.Provider>
    )
}