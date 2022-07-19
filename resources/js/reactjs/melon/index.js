
import React from 'react'
import { createRoot } from 'react-dom/client'
import logos from '../../../images/logo.png'

const Melon = () => {
  
  return (
    <>      
      <img src={logos} /> 
    </>
  )
}
const root = createRoot(document.getElementById('melon'));
root.render(<Melon />);