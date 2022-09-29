import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard';

export default function CategoryPage() {

  let {id} = useParams();
  let [products,setProducts] = useState([]);
  let [loading,setLoading] = useState(true);
  const url = "https://fakestoreapi.com/products/category/"

  async function getProducts(){
    setLoading(true);
    let response = await fetch(url+id);
    let data = await response.json();
    // console.log(data);
    setProducts(data)
    setLoading(false);
  }

  useEffect(()=>{
    getProducts();
  },[id])

  return (
    <div className='max-w-7xl mx-auto flex flex-wrap justify-between'>
      {loading? ("Fetching Data"):(
        products.map((product)=>{
          return(
            <ProductCard key={product.id} product={product}/>
          )
        })
      )}
    </div>
  )
}
