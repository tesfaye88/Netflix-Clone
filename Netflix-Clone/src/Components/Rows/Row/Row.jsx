import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "../../Utils/axios";
import "./row.css";
import movieTrailer from "movie-trailer"

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailerURL] = useState("");

    // movie-trailer allows users to view a trailer for a specific movie, usually from a service like YouTube, Vimeo, or a custom video player.

    useEffect(() => {
        (async () => {
            try {
                const request = await axios.get(fetchURL);
            // console.log(request.data.results);
            setMovies(request.data.results);
            return request;
                
            } catch (err) {
                console.log(err)
                
            }
            
        })
        // async function fetchData() {
        //     const request = await axios.get(fetchURL);
        //     // console.log(request.data.results);
        //     setMovies(request.data.results);
        //     return request;
        // }
        // fetchData();
        ()
    }, [fetchURL]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        // If a trailer URL already exists, reset it to an empty string
        if (trailerURL) {
            setTrailerURL("");
        } else {
             // Otherwise, find the trailer for the selected movie
            movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
                .then((url) => {
                    console.log(url)

                    const urlParams = new URLSearchParams(new URL(url).search);
                    console.log(urlParams)
                    setTrailerURL(urlParams.get("v"));
                })
                .catch((error) => console.log(error));
        }
    };

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                            }`}
                        alt={movie.name}
                    />
                ))}
            </div>
            {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
        </div>
    );
}

export default Row;