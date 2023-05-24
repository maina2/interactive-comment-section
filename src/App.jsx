import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='maincont'>
      <div className="comment-sect">
        <div className='img'>
          <img src="src\images\avatars\image-juliusomo.png" alt="image" />
        </div>
        {/* <h4>Comment below</h4> */}
        <textarea  name="area" id="text-area" ></textarea>
        <button className='buttn'>Send</button>
      </div>


    </div>
      
  
  )
}

export default App
