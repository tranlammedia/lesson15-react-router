import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Menu from './components/Menu'
import routes from './routes'


class App extends Component {
    render() {
        return (
            <div className="container">
                {/* {Menu} */}
                <BrowserRouter>
                    <Menu />
                    {/* {content} */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {this.showContentMenus(routes)}
                    </Routes>

                </BrowserRouter>
            </div>
        );
    }
    showContentMenus = (routes) => {
        var result = ''
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                        exact={route.exact} />
                )
            })
        }
        return result
    }
}


export default App;
