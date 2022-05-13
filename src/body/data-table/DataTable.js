import React, {useEffect, useState} from "react";
import MovieRecord from "./data-record/MovieRecord";
import DirectorRecord from "./data-record/DirectorRecord";
import './DataTable.css';

export default function DataTable(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [isMovie, setIsMovie] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:8080${props.api}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
        setIsMovie(props.api === '/movies');
        return () => setIsLoaded(false);
    }, [props.api]);

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
        return <div>Loading...</div>
    } else {
        return (
            <table id="dataTable">
                <thead>
                <tr>
                    {printThead()}
                </tr>
                </thead>
                <tbody>
                {printTbody()}
                </tbody>
            </table>
        );
    }
}
