
import React from 'react'
import { createRoot } from 'react-dom/client'

const Melon = () => {
  
  return (
    <>      
      <img src="/images/logo.png" alt="logo"/> 
    </>
  )
}
const root = createRoot(document.getElementById('melon'));
root.render(<Melon />);