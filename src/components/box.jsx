import "../css/box.css"

function Box({product}) {

  return (
    
    <>
    
        <div className="b_box">

            <div className="b_img_box">

                <img className="b_img" src={product.image} alt={product.title} />

            </div>

            <div className="b_list">

                <p> {product.title.slice(0, 20)}... </p>

                <span> ${product.price} </span>

                <button> Add To Cart </button>

            </div>

        </div>
    
    </>
  
)

}

export default Box