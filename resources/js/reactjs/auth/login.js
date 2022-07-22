import React from 'react'
import { createRoot } from 'react-dom/client'


const Login = () => {    

    
  return (
    <>
        <h1>Login</h1>
    </>
  )
  }

const root = createRoot(document.getElementById('login'));
root.render(<Login />);