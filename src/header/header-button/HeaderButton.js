import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import './HeaderButton.css';

const HeaderButton = ({path}) => {
  const isActive = useIsHeaderButtonActive(path);

  return (
      <li className={`header-button ${isActive ? 'header-button-active' : ''}`}>
        <Link to={`/${path.toLowerCase()}`}>{path.toString()}</Link>
      </li>
  );
}

function useIsHeaderButtonActive(buttonPath) {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let btnPath = `/${buttonPath.toLowerCase()}`;
    setIsActive(btnPath === location.pathname.toLowerCase());
    return (() => {
      setIsActive(null);
    });
  }, [location]);

  return isActive;
}

export default HeaderButton;
