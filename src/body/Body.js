import React, {useEffect, useState} from "react";
import './Body.css';
import DataTable from "./data-table/DataTable";
import {useLocation} from "react-router-dom";

const Body = () => {
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
        {/*TODO {location.pathname.includes('movie') ? <DataForm /> : ''}*/}
      </div>
  );
}

export default Body;
