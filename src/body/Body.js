import React, {useEffect, useState} from "react";
import './Body.css';
import DataTable from "./data-table/DataTable";
import {useLocation} from "react-router-dom";
import DataForm from "./data-form/DataForm";

export default function Body() {
    const location = useLocation();
    const [path, setPath] = useState('');

    useEffect(() => {
        setPath(location.pathname);
    }, [location]);

    return (
        <div id="body">
            <div className="table-wrap">
                <DataTable api={location.pathname} />
            </div>
            {location.pathname.includes('movie') ? <DataForm /> : ''}
        </div>
    );
}
