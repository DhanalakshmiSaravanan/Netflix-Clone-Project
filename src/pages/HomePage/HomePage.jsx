import DataRow from '../../component/Row/DataRow'
import Banner from '../../component/Banner/Banner'
import Footer from "../FooterPage/Footer"
import { Navigate } from 'react-router-dom'
const HomePage = () => {
  const user=localStorage.getItem("userdetails")
return (
  <div className='bg-black'>
    {user ? (
      <>
      <Banner/>
      <DataRow title="TRENDING NOW" searchmovie={""} fetchUrl={'trendingnow'} isLargeRow/>
      <DataRow title="TOP RATED" searchmovie={""} fetchUrl={'topRated'} isLargeRow/>
      <DataRow title="POPULAR" searchmovie={""} fetchUrl={'popular'} isLargeRow/>
      <DataRow title="UPCOMING" searchmovie={""} fetchUrl={'upComing'} isLargeRow/>
      <Footer/>
      </>
    ):(
      <Navigate to={"/login"}/>
    )}
  </div>
);
};
export default HomePage;