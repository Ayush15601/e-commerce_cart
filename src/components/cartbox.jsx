import "../css/cartbox.css"

import { useDispatch } from "react-redux"
import { useState } from "react"
import { removeFromCart } from "../feature/cartslice"

function Cart_box({cart}) {

    const [text, settext] = useState(0)

    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeFromCart(cart))
    }

    return(
        
        <>

            <div className="c_box">

                <div className="c_img">

                    <img src={cart.image} alt="image" />

                </div>

                <div className="c_list">

                    <p> Prise ${cart.price} </p>

                    <div className="c_input">

                        <input type="text" onClick={(e) => settext(e.target.value)} value={text} name="text"/>

                        <button > Update </button>

                        <button onClick={handleRemove}> Remove </button>

                    </div>

                </div>
            
            </div>
        
        </>
    )
}

export default Cart_box