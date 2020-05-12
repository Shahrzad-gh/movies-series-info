import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-dark mb-5">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand text-white text-lg brand-text" to="/">
                            Movie Database
                        </Link>
                    </div>
                    <ul className="navbar-nav ml-auto text-light d-inline-block">
                        <li className="nav-item d-inline-block mr-4">
                            <i className="fab fa-imdb fa-3x" id="imdb-logo"></i>                                                
                        </li>
                        <li className="nav-item d-inline-block mr-4">
                            <i className="fab fa-react fa-3x" id="react-logo"></i>                                                
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
