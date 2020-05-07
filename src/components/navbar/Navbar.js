import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <img id="JP" src="https://raw.githubusercontent.com/jcbpetersen1995/Jake-s-Portfolio/master/Original.png" width="30" height="30" alt="JP Logo"/>
            <a className="navbar-brand" href="/">Employee Directory</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/all">All Employees</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;
