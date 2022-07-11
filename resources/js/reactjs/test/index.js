import React from 'react'
import { render } from 'react-dom'

const Test = () => {
  return (
    <div className='text-primary'>Test Component in react5</div>
  )
}

render(<Test />, document.getElementById('test'))