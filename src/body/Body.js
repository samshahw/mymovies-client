import React from "react";
import './Body.css';
import DataTable from "./data-table/DataTable";

export default function Body() {
    return (
        <div id="body">
            <DataTable api="movies" />
        </div>
    );
}
