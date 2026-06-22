import Navbar from "../components/navbar"
import Box from "../components/box"

import "../css/home.css"

import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../feature/counterslice"

function Home() {

    const [submited, setsubmited] = useState("")
    const [query, setquery] = useState("")
    
    const {item: product, status, error} = useSelector((state) => state.product)
    const dispatch = useDispatch()
    

    useEffect( () => {

        if(status === "idel"){
            dispatch(fetchProducts())
        }
    }, [status])

    const load = (e) => {

        e.preventDefault()

        if(status === "loading") return

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

                {(status === "failed") && <div className="h_error"> {error} </div>}

                {(status === "loading") ? ( <div className="h_loading"> loading products... </div> ) : (<div className="h_box"> {filteredProducts.map((item) => ( <Box product={item} key={item.id}/> ))} </div> )}
         
           </div>
        
        </>
    )

}

export default Home