import React, {useEffect} from "react";
import async from "async";

const API_URL = 'http://www.omdbapi.com?apiKey=8963b879';

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, [])

    return (
        <h1>App</h1>
    )
}

export default App;