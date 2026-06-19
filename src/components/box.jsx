import "../css/box.css"

function Box({product}) {

  return (
    
    <>
    
        <div>

            <div>

                <img src={product.image} alt={product.title} />

            </div>

            <p> {product.title} </p>

            <span> {product.price} </span>

            <button> Add To Cart </button>

        </div>
    
    </>
  
)

}

export default Box