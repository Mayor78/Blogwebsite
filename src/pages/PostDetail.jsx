import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import thumbnail from '../assets/blog/blog20.jpg'

const PostDetail = () => {
  return (
    <div className='my-auto md:py-[6rem] md:mx-[5rem] py-2 mx-2 '>

          <div className='w-[100%] md:w[60%] md:bg-white bg-transparent my-auto mx-auto py-[2rem] px-0'>
            <div className='flex justify-between mb-5 px-10'>
                <PostAuthor/>
                <div className='post-detail-button flex gap-1 items-center p-5 '>
                  <Link to={"/posts/gjh/edit"} className='bg-primary text-white h-8 p-1 rounded-[10px] hover:bg-blue-800 font-sm'>Edit</Link>
                  <Link to={"/posts/gjh/delete"} className='bg-red-500 text-white  h-8 p-1 rounded-[10px] hover:bg-red-700 font-sm'>Delete</Link>

                </div>
            </div>
             <h1 className='font-bold leading-7 px-10 text-3xl '>This is the post title</h1>
             <div className='thumbnail px-10 my-4 mx-0 h-fit max-h-[30rem] overflow-hidden'>
              <img src={thumbnail} alt="" />
             </div>
             <div className=' px-10 mb-3'>

            
             <p  className='mb-3'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis soluta, repellendus 
              ex rerum dicta saepe sapiente doloribus placeat a beatae hic adipisci, sed odio exercitationem.
               Dignissimos voluptas itaque dolor, ex assumenda sit natus hic aperiam dolorem, enim magnam ad totam.
             </p>
             <p className='mb-3'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde accusamus ea exercitationem consequatur
               assumenda quibusdam libero, qui id repellat dolor enim. Dolor laboriosam placeat, illo et similique
                laborum minima adipisci unde quae maxime nostrum dolores repellendus, assumenda deserunt ipsa eum. Itaque 
                velit quos reiciendis, nostrum maiores et alias veniam neque, enim, cumque eaque eveniet consequatur!
             </p>
             <p className='mb-3'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae eos,
               consectetur quibusdam animi illum aperiam eveniet sapiente eligendi quia mollitia 
               sint porro! Libero quia atque molestias molestiae ea ipsam architecto porro fugiat praesentium. 
               Repellendus eum fuga tempore quae maxime sit mollitia suscipit optio quibusdam tempora doloremque animi 
               minima debitis voluptatem nihil neque illo voluptatum, maiores distinctio explicabo! Obcaecati fugiat deleniti 
               similique a officiis, sint sequi laudantium, in quo quaerat ab, iure assumenda enim suscipit reiciendis itaque.
                Quia saepe veniam sed ex labore incidunt dolorem voluptates nihil debitis tenetur minus dicta ratione nam quibusdam
                 sit optio tempore aut nemo adipisci, minima aspernatur 
              quae est assumenda sint? Voluptatem quidem nulla illo nemo tempora!
             </p>
             <p className='mb-3'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque veniam hic dolores officiis,
               corporis voluptatum culpa? Quo illo quidem ratione!
             </p>
             <p className='mb-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero earum sunt exercitationem. 
              Sequi ab aliquam iure, quod magnam libero quam possimus praesentium tempore repellendus vero 
              maiores necessitatibus debitis eum, fugit impedit consequuntur sed. Eos pariatur accusantium 
               commodi. Excepturi officiis molestiae, possimus tempore eos explicabo iste fugit neque repellat animi
                corporis odio, aspernatur doloremque dolor eligendi voluptatibus cum, a vel ipsam necessitatibus illo ad 
                laborum mollitia culpa. Veritatis maxime voluptate vero quia minus perferendis repellendus, molestiae cum 
                necessitatibus ullam sint soluta voluptatibus excepturi vitae quasi omnis nesciunt rem! A nemo dolore, at nihil
                 doloribus incidunt officiis ea nisi porro modi ullam laboriosam nostrum, ab est. Impedit dolorum quo molestias, 
                 facilis eos perferendis numquam tenetur ab odit rerum similique expedita corporis accusantium. Assumenda, dolor 
                 placeat! Doloribus mollitia earum molestias autem culpa dolor exercitationem nam quasi, animi enim eveniet 
                 doloremque, iure dolorem maxime incidunt ipsa suscipit. Nemo commodi odit expedita tempora! Fugiat ad non
                  voluptatibus, id praesentium dignissimos, voluptatem fugit quod quis laborum veritatis neque quibusdam repellat 
                  eligendi et distinctio voluptas quos sunt? Similique alias optio ullam provident.
                  Dicta esse quidem voluptatem voluptatum repellat repellendus distinctio harum doloribus incidunt 
              aliquam cum commodi, reiciendis fugit quae? Tempore, voluptates quod laudantium quisquam voluptatem voluptas!
             </p>
             </div>
          </div>
    </div>
  )
}

export default PostDetail