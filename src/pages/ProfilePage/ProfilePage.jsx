import "./ProfilePage.css"
import Netflix from "../../assets/images/Netflix-avatar.png"
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {
const user=JSON.parse(localStorage.getItem("userdetails"))
const navigator=useNavigate();
const logout=()=>{
    localStorage.removeItem("userdetails")
    navigator("/");
}
return (
<div className=" profile-p-container bg-black text-white">
<div className='p1 flex '><img className='profile-img w-[40px]' src={Netflix} alt=""/>
<h1 className='pt-[21px]'>{user?.email}</h1></div>
<h2 className='p-a'>Manage Profile</h2>
<h2 className='p-a'>Transfer Profile</h2>
<h2 className='p-a'>Account</h2>
<h2 className='p-a'>Help Center</h2>
<div className='p3'>
<button onClick={logout}>Sign out of Netflix</button>
</div>
</div>
)
}
export default ProfilePage