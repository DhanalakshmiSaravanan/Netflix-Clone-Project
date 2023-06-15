import React from 'react'
import DataRow from '../Row/DataRow'
import { useUserContext } from '../../utils/Hooks/userContext'
import Footer from '../../pages/FooterPage/Footer'

const Search = () => {
  const {searchmovie}=useUserContext();

  return (
    <div className='bg-black text-white'>
    <h1 className="pt-[65px] pl-[20px] font-bold text-2xl ">Top Search..</h1>
    <DataRow title="" searchmovie={searchmovie} fetchUrl={"trendingnow"}/>
    <h1 className="pt-[65px] pl-[20px] font-bold text-2xl ">Recent view..</h1>
    <DataRow title="" searchmovie={""} fetchUrl={"watch"}/>
    <Footer/>
    </div>
  )
}

export default Search