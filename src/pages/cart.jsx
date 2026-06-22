import "../css/cart.css"
import Navbar from "../components/navbar"
import { useState } from "react"

function Cart() {

    const [text, settext] = useState(0)

  return (
    
    <>
    
        <Navbar />

        <div className="c_div">


            <div className="c_main_box">

                <h2> Your Cart </h2>

                <br />

                <div className="c_box">

                    <div className="c_img">

                        <img src="ss" alt="image" />

                    </div>

                    <div className="c_list">

                        <p> Prise $200 </p>

                        <div className="c_input">

                            <input type="text" onClick={(e) => settext(e.target.value)} value={text} name="text"/>

                            <button > Update </button>

                            <button> Remove </button>

                        </div>

                    </div>
                
                </div>

                <br /><br />
                
                <div className="c_p">

                    <p> Total Prize  $200</p>

                </div>

                <br />

                <button className="c_btn"> Back to Shoping </button>

            </div>
        
        </div>

    </>
  
    )

}

export default Cart