import { Link } from 'react-router-dom'
import productsData from '../data/products.json'

const Homepage = () => {
  return (
    <div className="container my-5">
      <div className="jumbotron bg-light p-5 rounded mb-5">
        <h1 className="display-4 fw-bold">Welcome to iconNEEK</h1>
        <p className="lead">Discover premium clothing for modern men</p>
        <Link to="/products" className="btn btn-dark btn-lg">Shop Now</Link>
      </div>

      <h2 className="mb-4">Featured Collections</h2>
      <div className="row">
        {productsData.slice(0, 6).map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={product.thumbnail} className="card-img-top" alt={product.title} style={{height: '250px', objectFit: 'cover'}} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="text-muted small">{product.category}</p>
                <h6 className="text-success fw-bold">Rs. {product.price}</h6>
                <p className="text-warning small">⭐ {product.ratings}</p>
                <Link to={`/productview/${product.id}`} className="btn btn-sm btn-dark w-100">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Homepage
