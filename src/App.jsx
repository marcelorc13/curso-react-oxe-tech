import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Sobre from "./routes/sobre"; 
import Contato from "./routes/contato";
import Login from "./routes/login";
import AuthProvider from "./context/auth";
import Cadastro from "./routes/cadastro";

export default function App() {

    const rotas = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/sobre',
            element: <Sobre />
        },
        {
            path: '/contato',
            element: <Contato />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/cadastro',
            element: <Cadastro />
        },
    ])

    return (
        <AuthProvider >
            < RouterProvider router={rotas} />
        </AuthProvider>
    )
}