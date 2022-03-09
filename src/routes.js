import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Admin from './components/Admin'
import Products from './components/Products'
import NotFound from './components/NotFound'
import {matchRoutes, matchPath, useMatch, MemoryRouter, match, Redirect} from 'react-router-dom'

const routes = [
    {
        path : "/",
        exact : "true",
        element : <Home/>
    },
    {
        path : "/about",
        exact : "false",
        element : <About/>
    },
    {
        path : "/contact",
        exact : "false",
        element : <Contact/>
    },
    {
        path : "/products",
        exact : "false",
        element : <Products match={MemoryRouter}/>
    },
    {
        path : "/login",
        exact : "false",
        element : <Login />
    },
    {
        path : "/admin",
        exact : "false",
        element : <Admin />
    },
    {
        path : "",
        exact : "false",
        element : <NotFound/>
    }
]

export default routes