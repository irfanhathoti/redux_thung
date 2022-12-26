import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
const ProductComponent = () => {
  const products = useSelector(state => state.allProducts.products)
  // const {id,title} = products[0]




  return (
    <div>
      {
        products.map(product => {
          const { id, title, price, category, image } = product
          return (
            <div key={id} className='four wide column'>
              <Link to={`product/${id}`} >
                <div className="ui link cards">
                  <div className="card">
                    <div className="image">
                      <img src={image} alt={title} />
                    </div>
                    <div className="content">
                      <div className="header"> {title} </div>
                      <div className="meta price">$ {price} </div>
                      <div className="meta">$ {category} </div>
                    </div>
                  </div>
                </div>

              </Link>
            </div>

          )
        })
      }
    </div>
  )
}

export default ProductComponent