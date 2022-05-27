import React from "react";
import moment from "moment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

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

  return (
      <tr>
        <td>{props.item.id}</td>
        <td className="td-clickable">{formatTitle(props.item.title)}</td>
        <td className="td-clickable">{props.item.genre.name}</td>
        <td className="td-clickable">{props.item.director.name}</td>
        <td className="td-clickable">{props.item.country.name}</td>
        <td>{formatDate(props.item.releaseDate)}</td>
        <td className="td-clickable td-trash"><FontAwesomeIcon icon={solid('trash')} /></td>
      </tr>
  );
}
