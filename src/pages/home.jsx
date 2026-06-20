import Navbar from "../components/navbar"
import Box from "../components/box"
import { getproduct } from "../api/api"
import { useState, useEffect } from "react"

import "../css/home.css"

function Home() {

    const [product, setproduct] = useState([])
    const [err, seterr] = useState(null)
    const [loading, setloading] = useState(false)
    const [query, setquery] = useState("")
    const [submited, setsubmited] = useState("")

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

    const load = (e) => {

        e.preventDefault()

        if(loading) return

        setsubmited(query)
    }

    const change = (e) => {

        const product = e.target.value
        setquery(product)

        if(product === ""){
            setsubmited("")
        }
    }

    const filteredProducts = product.filter((item) => item.title.toLowerCase().includes(submited.toLowerCase()))
    
    return (
        
        <>
        
            <Navbar />  
                
            <form className="h_form" onSubmit={load}>

                <input type="text" onChange={change} value={query} placeholder="Enter Your Product Name" name="search box"/>
                
                <input type="submit" value="Search" disabled={!query.trim()}/>
            
            </form>

           <div>

                {err && <div className="h_error"> {err} </div>}
            
                {/* {loading ? (<div className="h_loading"> <p> loading poducts... </p> </div>) : (<div className="h_box"> {product.map((item) => (<Box product={item} key={item.id}/>))} </div>)} */}

                {loading ? ( <div className="h-loading"> loading products... </div> ) : (<div className="h_box"> {filteredProducts.map((item) => ( <Box product={item} key={item.id}/> ))} </div> )}
         
           </div>
        
        </>
    )

}

export default Home