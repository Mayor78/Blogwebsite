import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'

const PostItem = ({postID, category, title, desc, authorID, thumbnail}) => {
  return (
    <div>
        <article className=''>
            <div>
                <img src={thumbnail} alt="" />
            </div>
            <div>
                <Link to={`/posts/${postID}`}>
                     <h3> {title}</h3>
                    </Link>
                <p>{desc}</p>
                <div>
                    <PostAuthor/>
                    <Link to={`/posts/categories/${category}`}>{category}</Link>
                </div>
            </div>
        </article>
    </div>
  )
}

export default PostItem