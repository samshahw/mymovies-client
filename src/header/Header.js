import React from "react";
import './Header.css';
import HeaderButton from "./header-button/HeaderButton";

export default function Header() {
  return (
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
          <HeaderButton path="Movies" />
          <HeaderButton path="Directors" />
          <HeaderButton path="About" />
        </ul>
      </div>
  );
}
