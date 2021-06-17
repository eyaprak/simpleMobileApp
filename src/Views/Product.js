import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Product() {
    const { id } = useParams()
    const url = `https://60caf05121337e0017e43518.mockapi.io/products/${id}`

    const product = useAxiosGet(url)

    let content;
    if(product.error){
        content = <p>
            There was an error please refresh or try it again
        </p>
    }

    if(product.loading){
        content = <Loader />
    }

    


    if (product.data) {
        content = 
        <div>
            <h1 className="font-bold text-2xl mb-3">{product.data.name}</h1>
            <div>
                <img src={product.data.images[0].imageUrl} alt="2" />
            </div>
            <div className="font-bold text-xl mb-3">
                $ {product.data.price}
            </div>
            <div>
                {product.data.description}
            </div>
        </div>
    }

    return (
        <div>
            {content}
        </div>
    )

}


export default Product;