import React from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();


  const handelSubmit = (e) =>{
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value
    const login = async () =>{
      const res = await fetch("http://127.0.0.1:8000/api/auth/",{
        method: 'POST',
        body:JSON.stringify({
          username,
          password
        })
      })
      if(res.ok){
        const resdata=res.json()
        navigate("/userdetails")
       
        

         
        
      }
      else{
        alert("failed to loggin")
      }

    }
    login()
    e.target.password.value = ""
  }
  return (
    <section className="min-h-screen min-w-full m-0 p-0 bg-neutral-700">
      <div className="container flex min-w-full   min-h-screen items-center justify-center p-10">
        <div className="gap-6 w-[90%] flex h-full flex-wrap items-center justify-center text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg  shadow-lg bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
              
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    
                   

                    <form onSubmit={handelSubmit}>
                      <p className="mb-4">Please login to your account</p>
                      
                      <div className="mb-4 flex gap-2">
                      <input
                        type="text"
                        label="Username"
                        name="username"
                       className="h-[40px]"
                      ></input>

                      {/* <!--Password input--> */}
                      <input
                        type="password"
                        label="Password"
                        name="password"
                      ></input>
                      </div>

                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                       
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="submit"
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                          >
                            Log in
                          </button>
                       

                       
                        <a href="/">Forgot password?</a>
                      </div>

                     
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        
                          <a href="/register"
                            type="button"
                            
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          >
                            Register
                          </a>
                       
                      </div>
                    </form>
                  </div>
                </div>

    
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Run different server for django
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login