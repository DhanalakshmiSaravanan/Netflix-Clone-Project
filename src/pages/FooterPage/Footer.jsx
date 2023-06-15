import "../FooterPage/Footer.css"
import { BsGlobe } from "react-icons/bs";
const Footer = () => {
return (
<div className='Footer-header'>

  <div className='footer'>
  <h2>Questions?Call 000-000-000-000</h2>
  <div className='row'>
        <ul className='col'>
        <li>FAQ</li>
        <li>Investor Relations</li>
        <li>Privacy</li>
        <li>Speed Test</li>
        <li>Help Centre</li>
        </ul>

        <ul className='col'>
            <li>Account</li>
            <li>Jobs</li>
            <li>Contact Us</li>
            <li>Only on Netflix</li>
            <li>Legal Notices</li>
        </ul>
            
        <ul className='col'>
            <li>Ways to Watch</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Media Centre</li>
            <li>Terms of Use</li>
        </ul>

  </div>
  </div>
 

   <div className='relative'>
   
   <select className='footer-select relative'>
       <option value="">Tamil</option>
       <option value="">English</option>
      </select>
      <BsGlobe className='absolute left-[250px] top-[40px]  caret-lime-50'/>
    <h2 className='footer-end'>Netflix India</h2>
   </div>
  




  </div>
    
  )
}

export default Footer