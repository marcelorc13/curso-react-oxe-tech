import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Sobre from "./routes/Sobre";
import Contato from "./routes/contato";
import Login from "./routes/login";
import AuthProvider from "./context/auth";

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
    ])

    return (
        <AuthProvider >
            < RouterProvider router={rotas} />
        </AuthProvider>
    )
}