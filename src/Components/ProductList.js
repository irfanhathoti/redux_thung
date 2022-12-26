import React from 'react'
import ProductComponent from './ProductComponent'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts} from '../redux/actions/productActions'

const ProductList = () => {

  const dispacth = useDispatch()

  

  useEffect(() => {
    dispacth(fetchProducts())
  }, [])

  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  )
}

export default ProductList