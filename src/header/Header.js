import React from "react";
import './Header.css';

export default function Header() {
    return(
        <div id="header">
            <h1 className="title">
                MyMovies
                <span className="title subtitle">- Internet movie database</span>
            </h1>
        </div>
    );
}
