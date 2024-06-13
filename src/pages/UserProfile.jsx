import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../assets/Dp/avatar16.jpg'
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";


const UserProfile = () => {
  const [avata, setAvata] = useState("")
  return (
    <div className='my-auto py-[6rem] mx-[5rem] ml-28 block   place-items-center'>
      <div className='grid place-items-center text-center'>
          <Link to={`/myposts/ghj`} 
          className='bg-white text-black block mr-[6rem] mb-5 h-8 p-1 rounded-[10px] hover:bg-primary font-sm'>
            My Posts
            </Link>
            <div className='profile-details '>
              <div className='avatar-wrapper w-[15rem] h-[15rem] '>
                <div className=" border-rounded-full overflow-hidden">
                  <img src={Avatar} alt=""  className=' rounded-full h-[100%] border-8 border-white '/>
                </div>
                <form className='form-avatar h-[1rem]'>
                  <input type="file"
                   name="avatar" 
                   id="avatar"
                    accept='png, jpeg,jpg' 
                    className='hidden'
                    onChange={e =>setAvata(e.target.files[0])} />
                  <label htmlFor="avatar " className=''>
                    <FaEdit className='text-2xl absolute  md:top-1/2  lg:top-1/2 top-[17rem] ' />
                  </label>
                </form>
                   <button 
                   className='profile-avatar  absolute md:top-1/2  lg:top-1/2 top-64 bg-primary text-white  h-8 p-1 rounded-full hover:bg-red-700 font-sm'>
                    <FaCheck className='text-2xl' />
                   </button>
              </div>
              <h1 className='absolute  md:top-1/2  lg:top-1/2 top-64 mt-12 font-bold text-[20px] mr-40 font-serif'>Abraham Mayowa</h1>

            </div>

      </div>

    </div>
  )
}

export default UserProfile