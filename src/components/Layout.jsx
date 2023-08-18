import { Outlet } from 'react-router-dom'
import Nav from './navbar.jsx'
import Footer from './footer.jsx'
export default function Layout(){
    return(
        <>
        <div className='view'>
            <Nav/>
            <Outlet/>
        </div>
        <Footer/>
        </>
    )
}