import { CartWidget } from "./CartWidget"
import logo from "../LOGO1.png"
import { Link, NavLink } from "react-router-dom"
import { useState } from "react"

export const NavBar = ()=>{

    const [cartItems, setCartItems] = useState([])

    const categories = [
        {name: "arneses", id:"11"},
        {name: "indumentaria", id:"22"},
        {name: "seguridad", id:"33"}
    ]
    return (
        <nav className="app-navBar">
       
            <Link to={"/"} className="logo-container">
                <img src={logo} alt="" />
            </Link>
            <ul>
                <li><NavLink to={"/"}>Inicio</NavLink></li>
                {categories.map((cat)=> (
                    <li key={cat.id}> 
                       <NavLink to={`/category/${cat.name}`}>{cat.name}</NavLink> 
                   </li>
                ))}
            </ul>
            <Link to={"Cart"}>
                <CartWidget
                cartItems={cartItems}/>
            </Link>
            
        </nav>
    )
      
}
