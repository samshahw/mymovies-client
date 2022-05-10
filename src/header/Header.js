import React from "react";
import './Header.css';
import {Link} from "react-router-dom";

export default function Header() {
    return(
        <div id="header">
            <h1 className="header-title">
                <div>
                    <span style={{color: 'yellow'}}>My</span>Movies
                </div>
                <div className="header-title header-subtitle">
                    Internet movie database
                </div>
            </h1>
            <ul className="header-menus">
                <li>
                    <Link to="/movies">Movies</Link>
                </li>
                <li>
                    <Link to="/directors">Directors</Link>
                </li>
                <li>
                    <Link to="/admin">Admin</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    );
}
