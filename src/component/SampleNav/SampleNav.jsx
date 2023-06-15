import React from 'react'
import { useLocation } from 'react-router-dom'
import Banner from "../../component/Banner/Banner"
import DataRow from '../Row/DataRow'
import Footer from "../../pages/FooterPage/Footer"

const SampleNav = () => {
  const {pathname}=useLocation();
  return (
    <div className='bg-black'>
      {pathname.slice(1)==="tv%20Shows" ? (
        <>
        <Banner/>
        <DataRow title="TV SHOWS" searchmovie={""} fetchUrl={"topRated"}/>
        </>
      ):(
        " "
      )}
      {pathname.slice(1)==="movies" ? (
        <>
        <Banner/>
        <DataRow title="MOVIES" searchmovie={""} fetchUrl={"topRated"}/>
        </>
      ):(
        " "
      )}
      {pathname.slice(1)==="new%20&%20Popular" ? (
        <>
        <Banner/>
        <DataRow title="NEW POPULAR" searchmovie={""} fetchUrl={"popular"}/>
        </>
      ):(
        " "
      )}
      {pathname.slice(1) === "browser%20by%20languages" ? (
        <>
        <Banner/>
        <DataRow title="Browser" searchmovie={""} fetchUrl={"popular"}/>
        </>
      ):(
        " "
      )}
      <DataRow title="UPCOMING" searchmovie={""} fetchUrl={"upComing"}/>
      <Footer/>
    </div>
  )
}

export default SampleNav