import "../css/cart.css"

import Navbar from "../components/navbar"
import Cart_box from "../components/cartbox"

import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

function Cart() {

    const {item: cart, totalPrice} = useSelector((state) => state.cart )

  return (
    
    <>
    
        <Navbar />

        <div className="c_div"> 

            <div className="c_main_box">

                <h2> Your Cart </h2>

                <br />

                    {(cart.length === 0) ? (<div className="c_empty"> <h2> Your Cart Is Empty </h2> </div>) : (cart.map( (item) => <Cart_box cart={item} key={item.id}/> ))}
                
                <div className="c_p">

                    <p> Total Prize ${totalPrice} </p>

                </div>

                <br />

                <Link to="/"> 
                
                    <button className="c_btn"> Back to Shoping </button>
                
                </Link>

            </div>

        </div>

    </>
  
    )

}

export default Cart