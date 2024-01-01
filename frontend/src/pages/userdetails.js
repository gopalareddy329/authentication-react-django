import React, { useEffect, useState } from 'react'
import { useAuth } from '../components/auth'


const UserDetails = () => {
  const {logout_user,userdetails,setUserDetails} = useAuth();
  const [edit,setEdit]=useState(false)
  const [data,setData]=useState(null)
  
  const handelChange = (e) =>{
    console.log()
    setData({...data,[e.target.name]:e.target.value})
  }
  const handelSubmit = async() =>{
  
    const res = await fetch('http://127.0.0.1:8000/api/updateuser/',{
      method:'PUT',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        "username":data.username,
        "email":data.email,
        "id":localStorage.getItem('userId')
      })
    })
    if(res.ok){
      const resdata = await res.json()
      setUserDetails({
        "username":resdata.username,
        "email":resdata.email
      })
      setEdit(!edit)
    }

  }
  const handelCancel = () =>{
    setData(userdetails)
    setEdit(!edit)

  }
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user details
        const userDetailsData = await userdetails;
        setData(userDetailsData);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };
    fetchData();
  }, [userdetails]);
  const handleLogout = async () =>{
    logout_user();
  }

    return (
      <div className="container mx-auto p-4">
        <div className="bg-white text-gray-600 shadow-md p-6 rounded-md">
          <h1 className="text-2xl font-bold ">User Profile</h1>
          <div>
            <button onClick={handleLogout} className='float-right bg-red-500 p-2 text-white'>logout</button>
             
            
              <div>
                  <p >Name:{edit ? <input value={ data?.username} name="username" onChange={handelChange} className='bg-transparent border-black border-[1px] border-solid ml-1 text-gray-600' type='text'/>: data?.username} </p>
                  <p>Email:{edit ? <input value={data?.email} name="email" onChange={handelChange} className='bg-transparent text-gray-600 border-black border-[1px] border-solid ml-1' type='text'/>:data?.email} </p>
                  {edit && <button onClick={handelSubmit} className='m-2 bg-[#66bf26] p-2 text-white'>Submit</button>}
                  <button className='m-2 bg-[#66bf26] p-2 text-white' onClick={handelCancel}>{edit ? "X":"Edit"}</button>
              </div>
            
              

          </div>
        </div>
      </div>
    )
  }
export default UserDetails