import React, { useState } from 'react'
import { POST_CATEGORIES } from '../data'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Uncategorized')
  const [description, setDescription] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  return (
    <div className='my-auto py-[6rem] mx-[5rem]'>
      <div className='container grid place-items-center mt-20'>
        <h2 className='font-bold text-2xl mb-5'>Create Post</h2>
        <p className="form-error-message bg-red-400 font-serif mb-3">
          this is an error message
        </p>
        <form className='create-post grid justify-center items-center'>
          <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus/>
          <select name="category" value={category} onChange={e => setCategory(e.target.value)} id="">
            {
              POST_CATEGORIES.map(cat => <option key={cat}>{cat}</option>)
            }
          </select>

        </form>
      </div>

    </div>
  )
}

export default CreatePost