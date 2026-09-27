import React from 'react'

const Header = () => {
  return (
    <>

  <header className="bg-info-subtle px-5">
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">iconNEEK</a>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav m-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Carts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
<div>
    <a href="#" className="btn btn-dark btn-sm me-2">Register</a>
    <a href="#" className="btn btn-info btn-sm me-2">Login</a>
</div>
          </div>
        </div>
      </nav>
    </header>

  )
}

export default Header
