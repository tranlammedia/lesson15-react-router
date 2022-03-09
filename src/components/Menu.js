import React, { Component } from 'react'
import { Route, NavLink, Link } from 'react-router-dom'

const menus = [
    {
        label : 'Home',
        to : "/",
        exact : true
    },
    {
        label : 'About',
        to : "/about",
        exact : false
    },
    {
        label : 'Contact',
        to : "/contact",
        exact : false
    },
    {
        label : 'Products',
        to : "/products",
        exact : false
    },
    {
        label : 'Login',
        to : "/login",
        exact : false
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (

        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active' : ''
            return (
                <li className={active}>
                    <Link to={to}>
                        {label}
                    </Link>
                </li>
            )
        }} />

    )
}


class menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <ul className="nav navbar-nav">
                    {/* <MenuLink to="/" label="Home" activeOnlyWhenExact={true}/> */}
                    {this.showMenu(menus)}
                </ul>
            </nav>
        );
    }
    showMenu = (menus) => {
        var result = ''
        if(menus.length>0) {
            result = menus.map((menu, index)=>{
                return (
                    <li key={index}>
                        <NavLink 
                            exact={menu.exact.toString()} 
                            to={menu.to}
                        >
                            {menu.label}
                        </NavLink>
                    </li>
                )
            })
        }
        return result
    }
}


export default menu;
