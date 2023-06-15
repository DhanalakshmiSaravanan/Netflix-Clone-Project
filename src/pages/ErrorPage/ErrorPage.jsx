import "../ErrorPage/ErrorPage.css"
import NetFlixLogo from '../../assets/images/NetFlixLogo.png'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div className='Error-img'>
          <img className='Error-logo'src={NetFlixLogo} alt="" />
          <h1 className='Error-h1 color'>Lost your way?</h1>
          <h3 className='Error-h3 color'>Sorry,we can't find that page.You'll find lots to explore on the home page.</h3>
          <Link to="/"><button className='Error-button color'>Netflix Home</button></Link>
          <h5 className='Error-h5 color'>Error Code NSES-404</h5>
    </div>
  )
}

export default ErrorPage