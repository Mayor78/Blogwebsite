import React, { useState } from 'react'
import { POST_CATEGORIES } from '../data'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
const EditPost = () => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Uncategorized')
  const [description, setDescription] = useState('')
  const [thumbnail, setThumbnail] = useState('')


   const modules ={
    toolbar:[
        [{"header": [1,2,3,4,5,6, false]}],
        ['bold','italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean']
    ]
}

 const formats =[
    'header', 'bold', 'italic', 'underline','strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
]




  return (
    <div className='my-auto py-[6rem] mx-[5rem]'>
      <div className='container grid place-items-center mt-20'>
        <h2 className='font-bold text-2xl mb-5 text-green-600'>Edit Post</h2>
        <p className="form-error-message bg-red-400 font-serif mb-3 p-1 text-1xl">
        this is an error message 
        </p>
        <form className='create-post grid justify-center items-center'>
          <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus/>
          <select name="category" value={category} onChange={e => setCategory(e.target.value)} id="">
            {
              POST_CATEGORIES.map(cat => <option key={cat}>{cat}</option>)
            }
            
          </select>
          <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription} 
          className='ov overscroll-auto bg-white h-[10rem]' />
            <input type="file"  onChange={e => setThumbnail(e.target.files[0])} accept='png,jpg,jpeg' className='mt-3'/>
            <button type='submit' className='bg-primary w-24 rounded-full mt-5 text-white'>Update</button>

        </form>
      </div>

    </div>
  )
}

export default EditPost 