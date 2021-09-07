import React from 'react'
import { Nav, Button } from 'react-bootstrap';
import Link from 'next/link'

export default function Navbar() {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-xl">
    <Link href="/">
      <a className="navbar-brand">Managing Work Trips</a>
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsExample07XL">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link href="/">
            <a className="nav-link"><Button className="btn btn-light">
            Home
          </Button></a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/articles">
            <a className="nav-link"><Button className="btn btn-warning">
            View A New Trip
          </Button></a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/write">
            <a className="nav-link"><Button className="btn btn-success">
            Create A New Trip
          </Button></a>
          </Link>
        </li>
      </ul>
      
    </div>
  </div>
</Nav>
  )
}
