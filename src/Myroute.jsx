import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Homepage from './pages/Homepage.jsx'
import Products from './pages/Products.jsx'
import Productview from './pages/Productview.jsx'
import Cart from './pages/Cart.jsx'
import Wishlist from './pages/Wishlist.jsx'

const MyRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}> 
          <Route index element={<Homepage />} />
          <Route path='/products' element={<Products />} />
          <Route path='/productview/:product_id' element={<Productview />} />
          <Route path='/carts' element={<Cart />} />
          <Route path='/wishlist' element={<Wishlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoute
