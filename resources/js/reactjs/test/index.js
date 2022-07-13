import React from 'react'
import { createRoot } from 'react-dom/client'

const Test = () => {
  return (
    <div className='text-primary'>Test Component in react6</div>
  )
}
const root = createRoot(document.getElementById('test'));
root.render(<Test />)