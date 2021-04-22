import React from "react";

var Header = () => {
    return (
    <div className="container-fluid" >
        <nav className="navbar navbar-expand-lg navbar-light" id="myHeader" style={{position:"fixed", backgroundColor:"rgba(4, 4, 179, 0.849)"}}>
            <a className="navbar-brand" href="/"><img src="./images/favicon.png" className="logoImage" /></a>
            <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarNav"
                ariaControls="navbarNav" ariaExpanded="false" ariaLabel="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav" style={{marginLeft:1000, zIndex:1}}>
                <ul className="navbar-nav" >
                <li className="nav-item">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/services">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/products">Products</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contacts">Contacts</a>
                </li>
                </ul>
            </div>
        </nav>
    </div>
    );
}

export default Header;