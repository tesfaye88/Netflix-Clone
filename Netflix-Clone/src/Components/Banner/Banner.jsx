import React, { useState, useEffect } from "react";
import axios from "../Utils/axios";
import requests from "../Utils/requests";
import "./banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {

    (async () => {
      try {
        // await ensures that the execution of the function pauses until the Axios request has finished and returned the response.
        const request = await axios.get(requests.fetchNetflixOriginals);
        // console.log(request)
        setMovie(request.data.results[
          // Math.random() generates a random number between 0 and 1
          // Math.floor() is used to round  to the nearest whole number, ensuring it's a valid array index.
          Math.floor(Math.random() * request.data.results.length)
        ],
          //  console.log(request.data.results)

        );

      } catch (error) {
        // console.log(error)

      }

    })()

    // async function fetchData(){
    //   const request = await axios.get(requests.fetchNetflixOriginals);
    //   setMovie(
    //     request.data.results[
    //       // Math.random() generates a random number between 0 and 1
    //       // Math.floor() is used to round  to the nearest whole number, ensuring it's a valid array index.
    //     Math.floor(Math.random() * request.data.results.length)
    //     ],

    //   );
    //   return request;
    // }
    // fetchData();
  }, []);

  console.log(movie);
  // substr(0, n - 1): Extracts the first n - 1 characters of the string to make space for the ellipsis.
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center",
      }}

    >
      <div className='banner_content'>
        <h1 className='banner_title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner_buttons'>
          <button className='banner_button play'>Play</button>
          <button className='banner_button'>My List</button>
        </div>
        <h1 className='banner_description'>
          {truncate(movie?.overview, 150)}
        </h1>

      </div>

      <div className='banner--fadeBottom'>
      </div>
    </div>
  )
}

export default Banner