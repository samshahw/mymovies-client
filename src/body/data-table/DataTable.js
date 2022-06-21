import React, {useEffect, useState} from "react";
import MovieRecord from "./data-record/MovieRecord";
import DirectorRecord from "./data-record/DirectorRecord";
import './DataTable.css';
import axios from "axios";
import LoadingSpinner from "../../loading-spinner/LoadingSpinner";

const DataTable = ({api}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isMovie, setIsMovie] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8080${api}`)
        .then(res => {
          setIsLoaded(true);
          setItems(res.data);
          console.log(res);
        })
        .catch(err => {
          setIsLoaded(true);
          setError(err.message);
        });
    setIsMovie(api.includes('movie'));
    return () => setIsLoaded(false);
  }, [api]);

  function printThead() {
    return Object.keys(items[0]).map((objKey, i) => (
        <th key={i}>{objKey.toUpperCase()}</th>
    ));
  }

  function printTbody() {
    if (isMovie) {
      return items.map(item => (
          <MovieRecord key={item.id} item={item} />
      ));
    } else {
      return items.map(item => (
          <DirectorRecord key={item.id} item={item} />
      ));
    }
  }

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <LoadingSpinner />
  } else {
    return (
        <table id="dataTable" cellSpacing="0">
          <thead>
          <tr>
            {printThead()}
            {isMovie ? <th>DELETE</th> : ''}
          </tr>
          </thead>
          <tbody>
          {printTbody()}
          </tbody>
        </table>
    );
  }
}

export default DataTable;
