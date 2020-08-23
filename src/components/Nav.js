import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    return (
      <div className="wrapper-nav">
        <div className="container-fluid">
        <nav className="navbar sticky-top navbar-expand-lg  navbar-light nav-color "> 
            <div className="container">
  <a className="navbar-brand" href="#">Allin1<span className="NavName">Quotes</span></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About us </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contactus">Contact us </Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <spna className="categories">Categories</spna>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      
    </ul>
    
  </div>
  </div>
</nav>
</div>
</div>
    )
}

export default Nav
