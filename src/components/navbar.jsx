import "../css/navbar.css"

import { Link } from "react-router-dom"

function Navbar() {

    return (
    
    <>
    
        <div className="n_navbar">
            
        <h2> Shopping Cart </h2>

            <div className="n_links">

                <Link to="/"> Home </Link>
                <Link to="/cart"> Cart </Link>

            </div>
        
        </div>    

    </>

    )

}

export default Navbar