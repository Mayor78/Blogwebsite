import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/Dp/avatar1.jpg'

const PostAuthor = () => {
  return (
    <div>
        <Link to={`/posts/users/ghjk`} className='flex gap-2 items-start'>
            <div className='w-[3rem] aspect-square rounded-md overflow-hidden'>
                <img src={avatar} alt="jhkj" />
            </div>
            <div>
                <h5 className='font-bold left-4 font-1xl'>By: Abraham mayowa</h5>
                <p>Just Now</p>
            </div>
        </Link>
    </div>
  )
}

export default PostAuthor