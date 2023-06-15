import Navbar from '../component/Navbar/NavBar'
const PageWrapper = ({children}) => {
return (
<div>
    <Navbar/>
    {children}
</div>
)
}

export default PageWrapper;