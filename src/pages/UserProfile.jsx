import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../assets/Dp/avatar16.jpg'
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";


const UserProfile = () => {
  const [avata, setAvata] = useState(Avatar)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

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
                  <h1 className='absolute  md:top-1/2  lg:top-1/2 top-64 mt-12 font-bold text-[20px]  font-serif'>Abraham Mayowa</h1>
                  
            </div>
            <form action="" className='form-profile flex flex-col gap-[0.8rem] mr-10'>
                      <p className="form-error bg-red-400 py-2 font-serif backdrop:blur-md shadow-md text-balance text-white w-auto">this is an error message</p>
                      <input type="text"
                       name="name"
                        id="name"
                         placeholder="Name" 
                         className='form-input w-full border-2 border-primary rounded-md'
                         value={name}
                          onChange={e =>setName(e.target.value)}/>

                           <input type="email"
                            name="email"
                             id="email"
                              placeholder="Email" 
                              className='form-input  w-full border-2 border-primary rounded-md'
                              value={email}
                              onChange={e =>setEmail(e.target.value)}/>

                              <input type="password"
                               name="currentPassword"
                                id="currentPassword"
                                 placeholder="Current Password" 
                                 className='form-input  w-full border-2 border-primary rounded-md'
                                 value={currentPassword}
                                 onChange={e =>setCurrentPassword(e.target.value)}/>

                                  <input type="password"
                                   name="newPassword"
                                    id="newPassword"
                                     placeholder="New Password" 
                                     className='form-input  w-full border-2 border-primary rounded-md'
                                     value={newPassword}
                                     onChange={e =>setNewPassword(e.target.value)}/>

                                     <input type="password"
                                      name="confirmPassword"
                                       id="confirmPassword"
                                        placeholder="Confirm Password" 
                                        className='form-input  w-full border-2 border-primary rounded-md'
                                        value={confirmPassword}
                                        onChange={e =>setConfirmPassword(e.target.value)}/>
                                         <button type="submit" 
                                         className='bg-primary text-white  h-8 p-1 rounded-full font-sm'>
                                          update  details
                                          </button>



                          
                    </form>

      </div>

    </div>
  )
}

export default UserProfile