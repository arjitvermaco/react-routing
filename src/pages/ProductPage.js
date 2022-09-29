import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductPage() {

  let {id} = useParams();
  let [product,setProduct] = useState({});
  let [loading,setLoading] = useState(true);
  const url = "https://fakestoreapi.com/products/"


  async function getProductData(){
    let response = await fetch(url+id);
    let data = await response.json()
    // console.log(data);
    setProduct(data);
    setLoading(false)
  }

  useEffect(()=>{
    getProductData()
  },[])

  return (
    <div className='max-w-7xl mx-auto mt-12'>
    {loading? ("Fetching product Data"):(
      <ProductDetails product={product}/>
    )}
    </div>
  )
}


function ProductDetails(props){
  return(
    <div className='flex'>
      <div className='w-1/2'>
        <img src={props.product.image} className="h-96"/>
      </div>

      <div className='w-1/2'>
        <h1 className='roboto text-3xl'>{props.product.title}</h1>
        <p className='my-12'>{props.product.description}</p>
        <span className='capitalize bg-blue-400'>{props.product.category}</span>
        <div className='flex justify-between'>
        <h3 className='roboto text-lg mt-4'>Rating: {props.product.rating.rate}</h3>
        <button className='bg-blue-600 text-white px-4 py-2 rounded-sm'>Add To Cart</button>
        </div>
        
      </div>
    </div>
  )
}
