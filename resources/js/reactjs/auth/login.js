import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
// import { toast, ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'






const Login = () => {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const login = (e) => {

    e.preventDefault()

    fetch('http://localhost:8000/api/login', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        pass: pass
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);

        if (data.status == 200) {

          setTimeout(() => {
            window.location.href = "/"
          }, 5000)

        }

      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }

  return (
    <>
      {/* toast err */}
      {/* <ToastContainer /> */}
      <form className="text-start" onSubmit={login}>
        <div className="input-group input-group-outline my-3">
          <input type="username" className="form-control" placeholder='Username' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-group input-group-outline mb-3">
          <input type="password" className="form-control" placeholder='Password' onChange={(e) => setPass(e.target.value)} />
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