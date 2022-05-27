import React from "react";

export default function DirectorRecord(props) {
  return (
      <tr>
        <td>{props.item.id}</td>
        <td>{props.item.name}</td>
        <td className="td-clickable">{props.item.country.name}</td>
      </tr>
  );
}
