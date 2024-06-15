import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../assets/Dp/avatar16.jpg';
 import { FaEdit, FaCheck } from "react-icons/fa";


const UserProfile = () => {
  const [avata, setAvata] = useState(Avatar);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
  return (
    <div className="flex flex-col items-center max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden mt-10">
 
      <div className="self-center m-4">
        <Link to={`/myposts/ghj`} className="bg-white text-black py-2 px-4 rounded hover:bg-blue-700 hover:text-white">
          My Post
        </Link>
      </div>
      
  
      <div className="w-32 h-32">
        <img
          className="w-full h-full rounded-full object-cover  border-8"
          src={Avatar}
          alt="User"
        />
      </div>
      <form  >
          <input type="file" name="avatar" id="avatar" accept="image/*" className='hidden' onChange={e => setAvata(URL.createObjectURL(e.target.files[0]))} />
              <label htmlFor="avatar" className='relative'>
                <FaEdit className='text-2xl absolute text-gray-700 cursor-pointer bottom-[33px] left-10' />
              </label>
              <button className='profile-avatar relative bg-primary text-white h-8 p-1 rounded-full hover:bg-red-700 left-10 bottom-8 ' >
              <FaCheck className='text-2xl ' />
            </button>
            </form>

      <div className="mt-4">
        <h2 className="text-2xl font-semibold text-gray-800">Abraham Mayowa</h2>
      </div>

    
      <form className="w-full px-8 py-4 space-y-4">
      <p className="form-error flex place-content-center bg-red-400 py-2 font-serif text-white w-auto">
             This is an error message
           </p>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={name} 
            onChange={e => setName(e.target.value)} 
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="current-password">
            Current Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="current-password"
            type="password"
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)}
            placeholder="Enter current password"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="new-password">
            New Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="new-password"
            type="password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            placeholder="Enter new password"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
            Confirm New Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UserProfile;




































































// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Avatar from '../assets/Dp/avatar16.jpg';
// import { FaEdit, FaCheck } from "react-icons/fa";

// const UserProfile = () => {
//   const [avata, setAvata] = useState(Avatar);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   return (
//     <div className='my-auto py-[6rem] mx-[5rem] ml-28'>
//       <div className='grid'>
//         <div className='flex justify-center'>
//           <Link to={`/myposts/ghj`} className='bg-white text-black mr-[6rem] w-20 mb-5 h-8 p-1 rounded-[10px] hover:bg-primary font-sm'>
//             My Posts
//           </Link>
//         </div>
//         <div className='profile-details flex flex-col items-center relative'>
//           <div className='avatar-wrapper w-[15rem] h-[15rem] relative'>
//             <div className="border-rounded-full overflow-hidden">
//               <img src={avata} alt="User Avatar" className='rounded-full h-[100%] border-8 border-white object-cover' />
//             </div>

//             <form className='absolute w-full h-full flex justify-center items-center'>
//               <input type="file" name="avatar" id="avatar" accept="image/*" className='hidden' onChange={e => setAvata(URL.createObjectURL(e.target.files[0]))} />
//               <label htmlFor="avatar" className='relative'>
//                 <FaEdit className='text-2xl absolute text-gray-700 cursor-pointer' style={{ top: '70%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10 }} />
//               </label>
//             </form>

//             <button className='profile-avatar absolute bg-primary text-white h-8 p-1 rounded-full hover:bg-red-700' style={{ top: '70%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 20 }}>
//               <FaCheck className='text-2xl' />
//             </button>
//           </div>
//           <h1 className='font-bold text-[20px] mt-6 font-serif'>Abraham Mayowa</h1>
//         </div>

//         <div className='w-full md:w-[60%] md:mx-64 mx-0 mt-8'>
//           <form action="" className='form-profile flex flex-col gap-4'>
//             <p className="form-error flex items-center bg-red-400 py-2 font-serif text-white w-auto">
//               This is an error message
//             </p>
//             <input type="text" name="name" id="name" placeholder="Name" className='form-input w-full border-2 border-primary rounded-md p-2' value={name} onChange={e => setName(e.target.value)} />
//             <input type="email" name="email" id="email" placeholder="Email" className='form-input w-full border-2 border-primary rounded-md p-2' value={email} onChange={e => setEmail(e.target.value)} />
//             <input type="password" name="currentPassword" id="currentPassword" placeholder="Current Password" className='form-input w-full border-2 border-primary rounded-md p-2' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
//             <input type="password" name="newPassword" id="newPassword" placeholder="New Password" className='form-input w-full border-2 border-primary rounded-md p-2' value={newPassword} onChange={e => setNewPassword(e.target.value)} />
//             <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" className='form-input w-full border-2 border-primary rounded-md p-2' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
//             <button type="submit" className='bg-primary text-white w-full md:w-[40%] mt-4 h-10 p-1 rounded-full hover:bg-slate-400'>
//               Update Details
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserProfile;
