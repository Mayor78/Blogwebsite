import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'

const PostItem = ({postID, category, title, desc, authorID, thumbnail}) => {
    const shortDescription = desc.length > 145 ? desc.substr(0, 145)+"... " :desc;
    const postTitle = title.length > 30 ? title.substr(0,30)+ "..." : title;

  return (
    <div>
        <article className='bg-white p-[1rem] pb-[2rem] cursor-default hover:border-x-1 hover:shadow-md rounded-md'>
            <div className=' overflow-hidden rounded-xl h-17rem]'>
                <img src={thumbnail} alt="" />
            </div>
            <div className='mt-[1.5rem]'>
                <Link to={`/posts/${postID}`}>
                     <h3 className='font-bold my-[1rem] mx-[0.6rem] w-auto text-clip'>{  postTitle}</h3>
                    </Link>
                <p className='text-gray text-sm text-balance break-words leading-5'>{shortDescription} <Link to={`/posts/${postID}`} className='font-semibold'>see more</Link></p>
                <div className='flex justify-between items-end mt-[2rem]'>
                    <PostAuthor />
                    <Link to={`/posts/categories/${category}`} className=' p-1 rounded-md hover:bg-gray-950 hover:text-white bg-slate-300 text-slate-50'>{category}</Link>
                </div>
            </div>
        </article>
    </div>
  )
}

export default PostItem