import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Rule from './Pages/Rule'
import Play from './Pages/Play'

let router = createBrowserRouter([
    {
        path : '/',
        element : <Layout/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : 'about',
                element : <About/>
            },
            {
                path : 'rules',
                element : <Rule/>
            },
            {
                path : 'play',
                element : <Play/>
            },
        ]
    }
])
createRoot(document.getElementById('root')).render(
        <RouterProvider router={router} />
 )
