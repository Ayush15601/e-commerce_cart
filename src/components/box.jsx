import "../css/box.css"

import { useDispatch } from "react-redux"
import { addToCart } from "../feature/cartslice"

function Box({filterProducts}) {

    const dispatch = useDispatch()

    const handleCart = () => {
        dispatch(addToCart(filterProducts))
    }

  return (
    
    <>
    
        <div className="b_box">

            <div className="b_img_box">

                <img className="b_img" src={filterProducts.image} alt={filterProducts.title} />

            </div>

            <div className="b_list">

                <p> {filterProducts.title.length > 20 ? ` ${filterProducts.title.slice(0, 18)}... ` : filterProducts.title} </p>

                <span> ${filterProducts.price} </span>

                <button onClick={handleCart}> Add To Cart </button>

            </div>

        </div>
    
    </>
  
    )

}

export default Box