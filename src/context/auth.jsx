import { useState, useEffect, useContext, createContext } from "react";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseconnection.jsx";
import { doc, setDoc } from 'firebase/firestore'
import { db } from "../firebaseconnection.jsx";

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {

    const [user, setUser] = useState('Envie novamente')

    const [logado, setLogado] = useState(false)

    useEffect(() => {
        loadStorage()
    }, [])

    function loadStorage() {
        const usuarioLogado = localStorage.getItem('Usuario')

        if(usuarioLogado) { 
            console.log(usuarioLogado)
            setLogado(true)
            console.log(logado)
        }
        else {
            console.log('nenhum usuário logado')
        }
    }


    const auth = getAuth()
    //https://console.firebase.google.com/project/oxe-tech-react/overview?hl=pt-br

    async function login(usuario, senha) {
        await signInWithEmailAndPassword(auth, usuario, senha)
            .then((userCredential) => {
                let data = {
                    nome: usuario,
                    senha: senha
                }
                StorageUser(data)

                onAuthStateChanged(auth, (user) => {
                    console.log(user)
                    console.log(user.uid)
                })
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
                let data = {
                    usuario:usuario,
                    email: email, 
                    idade: idade,
                    senha: senha,
                }
                StorageUser(data)

                console.log(userCredential)

                // setDoc(doc(db, 'users/', userCredential.user.uid), {
                //     usuario: usuario,
                //     email: email,
                //     idade: idade,
                //     senha: senha,
                // })

            })
            .catch((error) => {
                console.log(error)
            })

    }

    function logout() {
        console.log('Logout')
    }

    function StorageUser(data) {
        localStorage.setItem('Usuario', JSON.stringify(data))
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, cadastrar }}>
            <>{children}</>
        </AuthContext.Provider>
    )
}
