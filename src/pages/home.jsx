import Navbar from "../components/navbar"
import Box from "../components/box"
import { getproduct } from "../api/api"
import { useState, useEffect } from "react"

function Home() {

    const [product, setproduct] = useState([])
    const [err, seterr] = useState(null)
    const [loading, setloading] = useState(false)

    useEffect( () => {

        const loadproducts = async() => {

            try{
                setloading(true)
                const getproducts = await getproduct()
                setproduct(getproducts)
            }

            catch(err){
                console.log("Data is not loaded due to", err)
                seterr("Failed to load products...")
            }

            finally{
                setloading(false)
            }
        }

        loadproducts()
    }, [])
  
    return (
        
        <>
        
            <Navbar />  

           <div>

                {err && <div className="h_error"> {err} </div>}
            
                {loading ? (<div className="h-loading"> loading poducts... </div>) : (<div className="h-box"> {product.map((item) => (<Box product={item} key={item.id}/>))} </div>)}
         
           </div>
        
        </>
  )

}


export default Home