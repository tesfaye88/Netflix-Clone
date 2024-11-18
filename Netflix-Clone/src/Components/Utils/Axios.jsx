import React from 'react'
import axios from 'axios'
// to make HTTP requests to external APIs.
// base url to make requests to the movie database
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
})
export default instance;


