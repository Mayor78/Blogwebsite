import React, { useState } from 'react'
import { DUMMY_POST } from '../data'
import { Link } from 'react-router-dom'
const DashBoard = () => {
  const [posts, setPosts] = useState(DUMMY_POST)
  return (
    <div className='my-auto py-2 mx-2 md:py-[6rem] md:mx-[5rem]'>
      <div>
            {
              posts.length ? <div className="container-dashboard">
                       {
                        posts.map(post => {
                          return<article key={post.id} className='flex justify-between bg-white my-4 py-4 w-full rounded-md'>
                            <div className="dashboard-post-info block items-center  w-[100%]   md:flex  gap-8">
                              <div className="thumbnai w-[4rem] rounded-md overflow-hidden">
                                <img src={post.thumbnail} alt="" className='  ml-4 ' />
                               
                              </div>
                              <h5 className=' mx-2 md:mx-0 '>{post.title}</h5>
                              
                            </div>
                            <div className="dashboard-post-action flex gap-5">
                              <Link to={`/posts/${post.id}`} className="btn bg-white text-black hover:bg-black hover:text-white h-8 p-1 rounded-[10px]">view</Link>
                              <Link to={`/posts/${post.id}/edit`} className="btn bg-primary text-white h-8 p-1 rounded-[10px] hover:bg-blue-800 font-sm">Edit</Link>
                              <Link to={`/posts/${post.id}/delete`} className="btn bg-red-500 text-white  h-8 p-1 rounded-[10px] hover:bg-red-700 font-sm mr-4 ">Delete</Link>
                            </div>
                          </article>
                        })
                       }
              </div> : <h2 className='plac place-items-center'> You have no posts yet.</h2>
            }
      </div>
    </div>
  )
}

export default DashBoard