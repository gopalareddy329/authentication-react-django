import React from 'react'
import {BrowserRouter,  Routes, Route,Navigate } from "react-router-dom";
import UserDetails from './pages/userdetails';
import Register from './pages/Register';
import Login from './pages/Login';
import { AuthProvider, useAuth } from './components/auth';

const App = () => {
  const getUserData = async (setUserDetails) =>{
  
    if(localStorage.getItem('userId')){
      var res=await fetch("http://127.0.0.1:8000/api/getuserdetails/"+localStorage.getItem('userId')+"/")
      var resdata= await res.json()
      setUserDetails({
        "username":resdata.username,
        "email":resdata.email,
        
      })

    }
    
  }
  const AuthenticatedRoute = ({ children }) => {
    
    const { authenticated,userdetails,setUserDetails } = useAuth();
    if(authenticated === true){
      if(userdetails.username === ""){
        getUserData(setUserDetails)
      }
      
    }
    return authenticated ? children  : <Navigate to="/login" />;
  };
  return (
    <AuthProvider>
      <BrowserRouter>
   
       
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route  path='/' element={<AuthenticatedRoute><UserDetails /></AuthenticatedRoute>} />
              <Route path="/register" element={<Register/>} />
              
            </Routes>
        
          
      </BrowserRouter>
    </AuthProvider>
    
  )
}

export default App