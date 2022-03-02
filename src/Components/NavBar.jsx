import React from 'react'
import logo_bike from './logo.png';

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={logo_bike}  alt="logo" ></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span clclassNameass="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">Bicicletas</a>
              <a className="nav-link" href="#">Cascos</a>
              <a className="nav-link" href="#">Zapatillas</a>
              <a className="nav-link" href="#">Ropa</a>
            </div>
          </div>
        </div>
      </nav>

    </>

  )
}

export default NavBar