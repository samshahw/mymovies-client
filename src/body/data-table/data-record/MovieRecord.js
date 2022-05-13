import React from "react";
import moment from "moment";

export default function MovieRecord(props) {

    function formatTitle(title) {
        if (title.includes(', The')) {
            let newTitle = title.replace(', The', '');
            return 'The ' + newTitle;
        } else {
            return title;
        }
    }

    function formatDate(date) {
        const myDate = new Date(date);
        return moment(myDate).format('DD/MM/yyyy');
    }

    return(
        <tr>
            <td>{props.item.id}</td>
            <td>{formatTitle(props.item.title)}</td>
            <td>{props.item.genre.name}</td>
            <td>{props.item.director.name}</td>
            <td>{props.item.country.name}</td>
            <td>{formatDate(props.item.releaseDate)}</td>
        </tr>
    );
}
