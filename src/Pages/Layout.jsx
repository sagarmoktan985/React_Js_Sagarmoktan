import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header className="bg-info-subtle px-5">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold" to="/">iconNEEK</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav m-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/carts">Cart</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/wishlist">Wishlist</Link></li>
              </ul>
              <div><a href="#" className="btn btn-dark btn-sm me-2">Register</a><a href="#" className="btn btn-info btn-sm me-2">Login</a></div>
            </div>
          </div>
        </nav>
      </header>
      <main><Outlet /></main>
      <footer className="bg-dark-subtle p-5 mt-5"><div className="d-md-flex justify-content-between"><div className="box1 col-md-3"><h5>iconNEEK</h5><p>Premium clothing for Nepali youth.</p></div><div className="box2 col-md-3"><p><strong>Company Info</strong></p><ul className="list-unstyled"><li>About Us</li><li>Discount</li><li>New Drop</li></ul></div><div className="box3 col-md-3"><p><strong>Contact Us</strong></p><p>Email: info@iconneck.com</p><p>Phone: +977-1-XXXXXXX</p></div></div></footer>
    </>
  )
}
export default Layout
