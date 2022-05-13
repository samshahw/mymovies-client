import React from "react";
import moment from "moment";

export default function MovieRecord(props) {

    function formatDate(date) {
        const myDate = new Date(date);
        return moment(myDate).format('DD/MM/yyyy');
    }

    return(
        <tr>
            <td>{props.item.id}</td>
            <td>{props.item.title}</td>
            <td>{props.item.genre.name}</td>
            <td>{props.item.director.name}</td>
            <td>{props.item.country.name}</td>
            <td>{formatDate(props.item.releaseDate)}</td>
        </tr>
    );
}
