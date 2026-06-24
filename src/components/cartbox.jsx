import "../css/cartbox.css"

import { useDispatch, useSelector } from "react-redux"
import { removeFromCart, updateItemQuantity, updateTempQuatnity } from "../feature/cartslice"

function Cart_box({cart}) {

    const {tempItem} = useSelector( (state) => state.cart)

    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeFromCart(cart))
    }

    const handleUpdate = (id) => {
        dispatch(updateItemQuantity({ id }))
    }

    const handleUpdateQuantity = (id, quantity) => {
        dispatch(updateTempQuatnity({id, quantity}))
    }

    return(
        
        <>

            <div className="c_box">

                <div className="c_img">

                    <img src={cart.image} alt="image" />

                </div>

                <div className="c_list">

                    <p> Price ${cart.price} </p>

                    <div className="c_input">

                        <input type="number" min="1"  value={tempItem.find(tempItem => tempItem.id === cart.id ) ?.quantity || cart.quantity} onChange={ (e) => handleUpdateQuantity(cart.id, Number(e.target.value) || 1)}/>

                        <button onClick={() => handleUpdate(cart.id)}> Update </button>

                        <button onClick={handleRemove}> Remove </button>

                    </div>

                </div>
            
            </div>
        
        </>
    )
}

export default Cart_box