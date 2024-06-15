import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  const [userData, setUserData] = useState({
    name: '',
   
    password: '',
   
  })
  const changeInputHandler = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value })
  }
  return (
    <div className='my-auto py-[6rem] md:mx-[8rem] mx-[3rem] lg:mx-[10rem] '>
            <div className='bg-white  shadow-2xl'> 
              <h2 className='font-bold text-2xl flex justify-center items-center'>Login</h2>
              <form className='  justify-center inline-block' >
                <p className='error mt-3 mx-2 bg-red-500 text-white p-1 font-extralight flex place-content-center '> this is an error message</p>
                 <input type='email'
                 placeholder='Email' 
                 name='email' value={userData.email} 
                 onChange={changeInputHandler}
                 className='border-2 border-gray-300 p-2 mx-10 mt-5 sm:w-full md:w-[80%] lg:w-[85%] shadow-md  rounded-2xl' />
                 <input type='password'
                 placeholder='Password' 
                 name='password' value={userData.password} 
                 onChange={changeInputHandler}
                 className='border-2 border-gray-300 p-2 mx-10 mt-5 sm:w-full md:w-[80%] lg:w-[85%] shadow-sm  rounded-2xl' />
    
                 <button type='submit' className='bg-blue-500 text-white p-2 w-[40%] mt-5 ml-10  md:ml-[10rem] lg:ml-[10rem] rounded-md'>Sign Up</button>
              </form>
              <p className='flex justify-center items-center'>Don't have an account? <Link to='/register' className='text-red-500 hover:underline'> Sign up</Link></p>
            </div>
    </div>
  )
}

export default Login