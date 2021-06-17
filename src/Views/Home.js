import React from 'react'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Home(){
    const url = `https://60caf05121337e0017e43518.mockapi.io/products/`
    
    let products = useAxiosGet(url)

    let content = null

    if(products.error){
        content = <p>
            There was an error please refresh or try it again
        </p>
    }

    if(products.loading){
        content = <Loader />
    }

    if (products.data) {
        content = 
        products.data.map((product, key)=>
            <div key={key}>
                <ProductCard 
                    product={product}
                />
            </div>
        )
    }

    return(
        <div>
            <h1 className="font-bold text-2xl mb-3">
                Best Sellers
            </h1>
            {content}
        </div>
    );
}

export default Home