import React from 'react';
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar" style={{height: "80px", backgroundColor: "#F69521", alignContent: "center"}}>
            <img src="sure-walk.png" alt="Sure Walk Logo" style={{height: "80px"}}></img>
            <a href="#"> Home </a>
            <Link to="/findsw"> Find Sure Walk </Link>
            <Link to="/getnum"> Get Sure Walk Number </Link>
        </div>
    );
}