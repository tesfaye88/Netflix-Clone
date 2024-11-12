import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import '../Components/Header/header.css'
import Banner from '../Components/Banner/Banner'
import requests from '../Components/Utils/requests'
import RowList from '../Components/Rows/RowList/RowList'
function Home() {
    // const Home=()=>{
    return (
        <>
            <Header />
            <Banner  />
            <RowList />
            <Footer />
            
            
        </>
    )
    // }
}

export default Home
