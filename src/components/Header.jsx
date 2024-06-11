import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from 'react-icons/ai'

const Header = () => {
  return (
    <nav className='w-[100vw] h-[5rem] grid bg-white-50  items-center fixed t-0 l-0 z-10 border-b-4'>
        <div className="container nav_container w-[84%] mx-auto">
            <Link to="/" className=' w-[3rem] block'>
                <img src="https://i.ibb.co/0222222/logo.png" alt="logo" className="nav_logo_img"  />
            </Link>
            <ul>
                <li><Link to="/profile">mayor</Link></li>
                <li><Link to="/create">CreaTe Post</Link></li>
                <li><Link to="/authors">Authors</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
             <button>
                <AiOutlineClose/>
             </button>
        </div>
    </nav>
  )
}

export default Header