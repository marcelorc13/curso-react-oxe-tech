import { useState, useEffect, useContext, createContext } from "react";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { auth } from "../firebaseconnection.jsx";

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {

    const [user, setUser] = useState('Envie novamente')

    const auth = getAuth()

    const database = getDatabase()
    console.log(database)

    async function login(usuario, senha) {
        await signInWithEmailAndPassword(auth, usuario, senha)
            .then((userCredential) => {
                console.log('Logou')
            })
            .catch((error) => {
                console.log('Usuário ou Senha Incorretos')
            })
    }

    function cadastrar(usuario, email, idade, senha) {
        //Mandar esse setUser para um banco de dados
        setUser({
            usuario: usuario,
            email: email,
            idade: idade,
            senha: senha,
        })

        createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                console.log(userCredential)
            })
            .catch((error) => {
                console.log(error)
            })

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
