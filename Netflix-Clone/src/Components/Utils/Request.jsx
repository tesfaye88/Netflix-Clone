import React from 'react'
const api_key=process.env.REACT_APP_api_key
const request={
  fetchTrending:`/trending/all/week?api_key=${api_key}language=en-US`,
  fetchNetflixOriginal:`/discover/tv?api_key=${api_key}&with_networks=213`,
  fetchTopRatedMovies:`/movie/top_rated?api_key=${api_key}language=en-US`,
  fetchActionMovies:`/discover/movie?api_key=${api_key}&with_genres=28`,
  fetchComedyMovies:`/discover/movie?api_key=${api_key}&with_genres=35`,
  fetchHorrorMovies:`/discover/movie?api_key=${api_key}&with_genres=27`,
  fetchRomanceMovies:`/discover/movie?api_key=${api_key}&with_genres=10749`,
  fetchDocumentaries:`/discover/movie?api_key=${api_key}&with_genres=99`,
  fetchTvShow:`/tv/popular?api_key=${api_key}language=en-US&page=1`

}
export default Request




