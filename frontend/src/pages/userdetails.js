import React, { useState } from 'react'
import { useAuth } from '../components/auth'


const UserDetails = () => {
  const {logout_user,userdetails} = useAuth();
  const [edit,setEdit]=useState(true)

  const handleLogout = async () =>{
    logout_user();
  }

    return (
      <div className="container mx-auto p-4">
        <div className="bg-white text-gray-600 shadow-md p-6 rounded-md">
          <h1 className="text-2xl font-bold ">User Profile</h1>
          <div>
            <button onClick={handleLogout} className='float-right bg-red-500 p-2 text-white'>logout</button>
            <p>Name:{edit ? <input value={userdetails.username} className='bg-transparent text-gray-600' type='text'/>:userdetails.username} </p>
            <p>Email:{edit ? <input value={userdetails.email} className='bg-transparent text-gray-600' type='text'/>:userdetails.email} </p>
            {edit && <button className='m-2 bg-[#66bf26] p-2 text-white'>Submit</button>}
            <button className='m-2 bg-[#66bf26] p-2 text-white' onClick={()=>setEdit(!edit)}>{edit ? "X":"Edit"}</button>
            
          </div>
        </div>
      </div>
    )
  }
export default UserDetails