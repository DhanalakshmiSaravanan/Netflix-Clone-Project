import { useState,useEffect } from 'react'
import "../FrontPage/FrontPage.css"
import NetFlixLogo from "../../assets/images/NetFlixLogo.png"
import { Link, useNavigate } from 'react-router-dom'
import Singlecontainer from "../Animation/Animation"
import Question from "../../pages/QuestionPage/Question"
import Footer from "../FooterPage/Footer"
import { BsGlobe } from "../../icons";
import {getuser} from "../../lib/axios/api-functions/user"

  const FrontPage = () => {
  const [email,setEmail]= useState()
  const [user,setUser]=useState()
  const navigator=useNavigate()
  const getstart=()=>{
    const value = email?.find((val) => val.email === user.email);
    if (value?.email === user.email) {
      navigator("/login");
    }
  }
  useEffect(()=>{
    getuser().then(({data})=>setEmail(data))
  },[]);
  return (
  <div>
  <div className='container'>
  <div className='Front-one'>
  <img className='Front-img'src={NetFlixLogo} alt="" />
  <div>
  <select className='Front-select f-s relative'>
  <option value="">Tamil</option>
  <option value="">English</option>
  </select>
  <BsGlobe className='absolute top-[52px] right-[250px] caret-lime-50'/>
   
  <Link to={"/login"}><button className='Front-select bg-red-600 w-[80px] p-[5px]'>Sign In</button></Link>
  </div>
  </div>
      
  <div className='Front-two'>
  <h1 className='text-[50px] font-bold'>Unlimited movies,TV shows and more.</h1>
  <h3 className='text-[25px]'>Watch anywhere.Cancel anytime.</h3><br/>
  <p className='text-[20px]'>Ready to watch?Enter your email to create or restart your membership.</p>
  </div>

  <div className='Front-three'>
  <input type="text" placeholder=" " onChange={(e)=>setUser({email:e.target.value})}className='Front-input'></input>
  <label className='font-label' htmlFor="">Email Address</label>
  <button className='btn-three' onClick={()=>getstart()}>Get Started</button>
  </div>
  </div>
    
  <Singlecontainer/> 
  <Question input={"Front-input"} button={"btn-three"} lab={"font-label"}/>
  <Footer/>
  </div>
)
}

export default FrontPage 