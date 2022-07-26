import React from 'react'
import { createRoot } from 'react-dom/client'
// import { toast, ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'






const Login = () => { 

  return (
    <>    
      {/* toast err */}
      {/* <ToastContainer /> */}
      <form className="text-start">
        <div className="input-group input-group-outline my-3">                                        
            <input type="username" className="form-control" placeholder='Username' />
        </div>
        <div className="input-group input-group-outline mb-3">                                        
            <input type="password" className="form-control" placeholder='Password' />
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