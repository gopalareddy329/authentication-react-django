import React from 'react'


const UserDetails = () => {

  const handleLogout = async () =>{
    const res = fetch("http://127.0.0.1:8000/api/logout/")
    
    console.log(res)

  }
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white text-gray-600 shadow-md p-6 rounded-md">
          <h1 className="text-2xl font-bold ">User Profile</h1>
          <div>
            <button onClick={handleLogout}>logout</button>
            <p>Name: John Doe</p>
            <p>Email: john.doe@example.com</p>
            {/* Add more user information as needed */}
          </div>
        </div>
      </div>
    )
  }
export default UserDetails