import { Link, NavLink } from "react-router-dom"
import { UserWidget } from "../UserWidget/UserWidget"
import "./NavBar.css"
import { useContext, useEffect } from "react"
import { CartContext } from "../context/CartContext"

export const NavBar = () => {
    const { totalProducts } = useContext(CartContext);

    const cartFilled  = () => { 
        Toastify({
            text: "¡Primero agrega prudctos!",
            duration: 3000,
            gravity:"buttom",
            style:{
            fontSize:"15px",
            fontFamily:"Verdana",
            color:"white",
            background: "black",
            position: "absolute",
            right: "6%",
            zIndex: 1000,
            }
        }).showToast();
    }
    
    
    return (
        <nav className="d-flex justify-content-around p-4 ">
            <div>
                <NavLink to="/">
                <button className="btn btn-primary mx-2">Todo</button>
                </NavLink>
                <NavLink to="/category/libro">
                <button className="btn btn-primary mx-2">Libros</button>
                </NavLink>
                <NavLink to="/category/historieta">
                <button className="btn btn-primary mx-2">Historietas</button>
                </NavLink>
            </div>
            <div className="d-flex gap-3 flex-lg-row icono-carrito">  
                <Link to={totalProducts <= 0 ? "#" : "/cart"} onClick={() => (totalProducts <= 0 ? cartFilled() : null)}>
                    <p className="carrito">{totalProducts}</p>
                    <UserWidget/>
                </Link>
                
            </div>
            
        </nav>
    )
}
