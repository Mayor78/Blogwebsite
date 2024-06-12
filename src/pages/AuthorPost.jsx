import React, { useState } from 'react'
import { DUMMY_POST } from '../data'
import PostItem from '../components/PostItem'
const AuthorPost = () => {
  const [posts, setPosts] = useState(DUMMY_POST)
  return (
    <div className='my-auto py-[6rem] mx-[5rem]'>
      
    {posts.length > 0 ? <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-[4rem]'>
     {
         posts.map(({id, thumbnail, category, title,desc, authorID})=> 
         <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title}
         desc={desc} authorID={authorID}/>)
     }
     </div>: <h2 className='font-bold text-3xl flex items-center justify-center'>No Post Found </h2>}
 </div>
  )
}

export default AuthorPost