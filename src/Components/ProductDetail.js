import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProduct,removeSelectedProduct } from '../redux/actions/productActions'

const ProductDetail = () => {
  const product = useSelector(state => state.product)
  const { image, title, price, category, description } = product

  console.log(product)
  const { id } = useParams()

  const dispatch = useDispatch()

 

  useEffect(() => {
    if (id && id !== "")
     dispatch(fetchProduct(id))
    
    return () =>{
      dispatch(removeSelectedProduct())
    }

  }, [id])
  return (
    <div className='ui grid container'>
      {
        Object.keys(product).length === 0 ?
          (<div>...Loading</div>) :
          (<div className='ui placeholder segment'>
            <div className='ui two column stackable center aligned grid'>
              <div className='ui verticle divider'>ADD</div>
              <img src={image} alt={title} />
            </div>
          </div>)
      }

    </div>
  )
}

export default ProductDetail