import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from 'react-icons/ai'

const Header = () => {
  const [navbar, setNavbar] = useState(false)
  return (
    <nav className='w-[100vw] h-[5rem]  bg-white-50 relative items-center t-0 l-0 z-10 border-b-4 backdrop-blur'>
        <div className=" w-[84%] mx-auto hidden md:flex lg:flex justify-between items-center h-[100%]">
            <Link to="/" className=' w-[3rem] '>
                <img src="https://i.ibb.co/0222222/logo.png" alt="logo" className="nav_logo_img"  />
            </Link>
            <ul className='flex items-center gap-[3rem]'>
                <li><Link to="/profile/fghj">mayor</Link></li>
                <li><Link to="/create">Create Post</Link></li>
                <li><Link to="/authors">Authors</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
             {/* <button className='block md:hidden'>
                <AiOutlineClose/>
             </button> */}
        </div>
        <div className=" absolute right-0 gap-0 top-[5rem] flex-col md:hidden lg:hidden">
            {/* <Link to="/" className=' '>
                <img src="https://i.ibb.co/0222222/logo.png" alt="logo" className="nav_logo_img w-[3rem]"  />
            </Link> */} 
             <button className='flex absolute top-0 left-32 '>
                <AiOutlineClose onClick={setNavbar}/>
             </button>
            <ul className='flex flex-col gap-3 w-[50%] box-content bg-white p-[2.5rem]  overflow-hidden'>
                <li className=''><Link to="/profile/fghj" >mayor</Link></li>
                <li><Link to="/create">Create Post</Link></li>
                <li><Link to="/authors">Authors</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
            
        </div>
    </nav>
  )
}

export default Header