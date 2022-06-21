import React from "react";

const DirectorRecord = ({item}) => {
  return (
      <tr>
        <td>{item['id']}</td>
        <td>{item['name']}</td>
        <td className="td-clickable">{item['country']['name']}</td>
      </tr>
  );
}

export default DirectorRecord;
