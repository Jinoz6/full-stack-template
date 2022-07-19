
import React from 'react'
import { createRoot } from 'react-dom/client'


const Test = () => {
  const testText = ()=>{
    console.log('test')
  }
  return (
   <>
    <div>
      {role == 'admin' && landingPage}
      {role == 'user' && dashboard}                                                        
    </div>
   </>
  )
}

const root = createRoot(document.getElementById('test'));
root.render(<Test />);