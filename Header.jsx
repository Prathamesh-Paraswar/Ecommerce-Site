import React from "react";
import {Link} from 'react-router-dom';
// import ReactDOM from "react-dom";
function Header()
{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Ecom</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse hero" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ">
                <li className="nav-item active ">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link" to="/cart">Cart</Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
            </ul>
        </div>
        </nav>
        </>
    )
}

export default Header;