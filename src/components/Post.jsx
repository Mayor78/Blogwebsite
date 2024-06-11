import React, { useState } from 'react'
import PostItem from './PostItem'
import Thumbnail from '../assets/blog/blog1.jpg'
import Thumbnail2 from '../assets/blog/blog2.jpg'
import Thumbnail3 from '../assets/blog/blog10.jpg'
import Thumbnail4 from '../assets/blog/blog12.jpg'


const DUMMY_POST =[
    {
        id:"1",
        thumbnail:Thumbnail,
        category: "education",
        title:'this is the title of very first post',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        authorID: 3
    },

    {
        id:"2",
        thumbnail:Thumbnail2,
        category: "science",
        title:'this is the title of very second post',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        authorID: 1
    },

    {
        id:"3",
        thumbnail:Thumbnail3,
        category: "weather",
        title:'this is the title of very third post',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        authorID: 13
    },

    {
        id:"4",
        thumbnail:Thumbnail4,
        category: "agriculture",
        title:'this is the title of very fourth post',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        authorID: 5
    },
]









const Posts = () => {
    const [posts, SetPost] = useState(DUMMY_POST)
  return (
    <div className='my-auto py-[6rem] mx-5'>
        {
            posts.map(({id, thumbnail, category, title,desc, authorID})=> 
            <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title}
            desc={desc} authorID={authorID}/>)
        }
    </div>
  )
}

export default Posts