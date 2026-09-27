import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import productsData from '../data/products.json'

const Productview = () => {
  const params = useParams()
  const pid = params.product_id
  const [product, setProduct] = useState({})
  const [qty, setQty] = useState(1)

  useEffect(() => {
    const foundProduct = productsData.find((p) => p.id === parseInt(pid))
    if(foundProduct) setProduct(foundProduct)
  }, [pid])

  const decrease = () => {
    if (qty > 1) setQty(qty - 1)
    else Swal.fire({ title: "Info", icon: "info", text: "Count must be at least 1." })
  }

  const addtocart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartData')) || []
    const productData = { id: product.id, title: product.title, price: product.price, image: product.thumbnail, quantity: qty, discount: product.discountPercentage, ratings: product.ratings }
    if(cartItems.find((item) => item.id === product.id)) Swal.fire({ title: "Error!", icon: "error", text: "Item already in cart." })
    else { cartItems.push(productData); localStorage.setItem('cartData', JSON.stringify(cartItems)); Swal.fire({ title: "Success!", icon: "success", text: "Added to cart!" }) }
  }

  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-md-5'><img src={product.thumbnail} alt={product.title} className="img-fluid rounded" /></div>
        <div className='col-md-7'>
          <h1 className='mb-3'>{product.title}</h1>
          <p className="text-muted">{product.category}</p>
          <h3 className='text-success mb-3'>Rs. {product.price}</h3>
          <p>{product.description}</p>
          {product.stock > 10 ? <p className='btn bg-success-subtle text-success'>In Stock</p> : <p className='btn bg-warning-subtle text-warning'>Limited Stock</p>}
          <div className='d-flex align-items-center my-3'>
            <h5 className='me-3'>Quantity:</h5>
            <button className='btn btn-secondary btn-sm' onClick={decrease}>−</button>
            <input type="text" className='form-control w-25 mx-2 text-center' value={qty} readOnly />
            <button className='btn btn-secondary btn-sm' onClick={() => setQty(qty + 1)}>+</button>
          </div>
          <button className='btn btn-dark btn-lg' onClick={addtocart}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
export default Productview
