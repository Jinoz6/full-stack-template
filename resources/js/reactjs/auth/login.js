import React from 'react'
import { createRoot } from 'react-dom/client'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'




const Login = () => {    
   
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();    

  const handleSubmit = (e) => {
   
    e.preventDefault();   
    
    const data ={
      username:username,
      password:password
    }
    //fetch login user
    fetch('http://localhost:8000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({data})
    })
    .then(res => res.json(

    ))
    .then(data => {data.status === 200 ? toast.success(data.message) : toast.error(data.message)})
    .catch(err => {
      console.log(err)
      toast.error(err.message)
    })   
  }
  
  


  return (
    <>    
      {/* toast err */}
      <ToastContainer />
      <form onSubmit={handleSubmit} className="text-start">
        <div className="input-group input-group-outline my-3">                                        
            <input type="username" className="form-control" placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div className="input-group input-group-outline mb-3">                                        
            <input type="password" className="form-control" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>                                    
        <div className="text-center">
            <button type='submit' className="btn bg-gradient-primary shadow w-100 my-4 mb-2">Sign in</button>
              
        </div>
        <p className="mt-4 text-sm text-center">
            Don't have an account?
            <a href="register" className="text-primary text-gradient font-weight-bold"> Sign up</a>
        </p>
      </form>
    </>
  )
  }

const root = createRoot(document.getElementById('login'));
root.render(<Login />);