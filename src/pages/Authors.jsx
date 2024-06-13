import React, { useState } from 'react'
import avatar1 from '..//assets/Dp/avatar1.jpg'
import avatar2 from '../assets/Dp/avatar10.jpg'
import avatar3 from '../assets/Dp/avatar14.jpg'
import avatar4 from '..//assets/Dp/avatar1.jpg'
import avatar5 from '../assets/Dp/avatar10.jpg'
import { Link } from 'react-router-dom'




const authorsData =[
  { id: 1,name: 'Basira',avatar: avatar1, posts:3 },
  { id: 2, name: 'On God',avatar: avatar2, posts:2},
  {id: 3,name: 'Mayorlee',avatar: avatar3,posts:5},
  { id: 4,name: 'Abraham',avatar: avatar4, posts:10},
  {id: 5,name: 'Mark',avatar: avatar3, posts:15 },
]

const Authors = () => {
  const [authors,setAuthors] = useState(authorsData)

  return (
    <div className=' section my-auto py-[6rem] mx-[5rem]'>
           {authors.length > 0 ? <div className='container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-flow-col-4 gap-[3rem]'>
       
           {
            authors.map(({id,avatar,name,posts})=>{
              return <Link key={id} to={`/posts/users/${id}`} 
              className='bg-white p-[1rem] rounded-md flex gap-[1rem] hover:box-content hover:shadow-md'>
                <div className='w-[4rem] h-[4rem] rounded-full overflow-hidden'>
                  <img src={avatar} alt={`image of ${name}`} />
                </div>
                <div>
                  <h3 className=' font-semibold'>{name}</h3>
                  <p>Posts: {posts}</p>
                </div>
              </Link>
            })
           }
      </div> : <h2 className='font-bold text-3xl flex justify-center mt-12'>No users/authors found</h2>}
    </div>
  )
}

export default Authors