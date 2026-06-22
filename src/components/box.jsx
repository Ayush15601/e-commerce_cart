import { useDispatch } from "react-redux"
import "../css/box.css"

function Box({product}) {

    const dispatch = useDispatch()

  return (
    
    <>
    
        <div className="b_box">

            <div className="b_img_box">

                <img className="b_img" src={product.image} alt={product.title} />

            </div>

            <div className="b_list">

                <p> {product.title.length > 20 ? ` ${product.title.slice(0, 18)}... ` : product.title} </p>

                <span> ${product.price} </span>

                <button onClick={() => dispatch(alert(product.id))}> Add To Cart </button>

            </div>

        </div>
    
    </>
  
    )

}

export default Box