import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Login = () => { 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleSubmit = (e) => {    
    e.preventDefault();
    fetch('http://localhost:2023/api/login', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',             
      },
      body: JSON.stringify({
        username: username,
        password: password       
      }),
    })
      .then((res) => res.json()) 
      .then((data) => {
        console.log(data);
        if(data.user.role === 'admin'){
          window.location.href = "/auth/dashboard"
        }else{
          
        }
        if(data.user.role === 'user'){
          window.location.href = "/auth/opd"
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error(error.message)
      });  
  }

  return (
    <>    
      {/* toast err */}
      <ToastContainer />     
      <form  className="text-start">
        <div className="input-group input-group-outline my-3">                                        
            <input type="username" className="form-control" placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)} />
        </div>
        <div className="input-group input-group-outline mb-3">                                        
            <input type="password" className="form-control" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>                                    
        <div className="text-center">
            <button onClick={handleSubmit} type="submit" className="btn bg-gradient-primary shadow w-100 my-4 mb-2">Sign in</button>
              
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