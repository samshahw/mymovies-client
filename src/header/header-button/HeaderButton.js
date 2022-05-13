import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import useLocationPath from "../../hooks/useLocationPath";
import './HeaderButton.css';

export default function HeaderButton(props) {
    const [path, setPath] = useState(props.path);
    const isActive = useIsHeaderButtonActive(props.path);

    return(
        <li className={`header-button ${isActive ? 'header-button-active' : ''}`}>
            <Link to={`/${path.toLowerCase()}`}>{path.toString()}</Link>
        </li>
    );
}

function useIsHeaderButtonActive(buttonPath) {
    const [isActive, setIsActive] = useState(false);
    const locationPath = useLocationPath();

    useEffect(() => {
        let btnPath = `/${buttonPath.toLowerCase()}`;
        setIsActive(btnPath === locationPath);
        return(() => {
            setIsActive(null);
        });
    });

    return isActive;
}
