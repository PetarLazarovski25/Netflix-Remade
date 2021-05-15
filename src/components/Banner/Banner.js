import React, { useEffect, useState } from 'react';
import axios from '../../axios'
import requests from '../../requests'
import './Banner.css'

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ])
        }
        fetchData();
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="Banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "cover cover"
        }}>
            <div className="Banner-Contents">
                <h1 className="Banner-Title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="Banner-Buttons">
                    <button className="Banner-Button">Play</button>
                    <button className="Banner-Button">My List</button>
                </div>

                <h2 className="Banner-Description">
                    {truncate(movie?.overview, 150)}
                </h2>
            </div>

            <div className="Banner-FadeBottom" />
        </header>
    );
}

export default Banner