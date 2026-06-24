import { useSelector } from "react-redux"
import "../css/navbar.css"

import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

function Navbar() {

    const cart = useSelector((state) => state.cart.item)

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light"
    })

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light")
    }

    return (
    
    <>

        <style>{`@import url('https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css');`}</style>
    
        <div className="n_navbar">
            
        <h2> Shopping Cart </h2>

        <i className={`bx ${theme === "light" ? "bx-moon" : "bx-sun"}`} id="theme-toggle" onClick={toggleTheme}></i>

            <div className="n_links">

                <Link to="/"> Home </Link>
                <Link to="/cart"> Cart ({cart.length}) </Link>

            </div>
        
        </div>    

    </>

    )

}

export default Navbar