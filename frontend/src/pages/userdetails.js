import React from 'react'
import { useAuth } from '../components/auth'


const UserDetails = () => {
  const {logout_user,userdetails} = useAuth();

  const handleLogout = async () =>{
    logout_user();


  }
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white text-gray-600 shadow-md p-6 rounded-md">
          <h1 className="text-2xl font-bold ">User Profile</h1>
          <div>
            <button onClick={handleLogout}>logout</button>
            <p>Name: {userdetails.username}</p>
            <p>Email: {userdetails.email}</p>
            {/* Add more user information as needed */}
          </div>
        </div>
      </div>
    )
  }
export default UserDetails