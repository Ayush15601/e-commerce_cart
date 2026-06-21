import "./css/App.css"

import Home from "./pages/home"
import Cart from "./pages/cart"

import { Route, Routes } from "react-router-dom"

function App() {
 
    return (
    
    <>

        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/cart" element={<Cart />} />

        </Routes>
 
    </>
  
    )

}

export default App