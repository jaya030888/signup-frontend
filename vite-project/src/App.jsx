import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return(

    <div className="formbox">

    <h1>Registration Page</h1>

    <section>
    <label>Name:</label>
    <input type='text' placeholder='Enter  your Name'/> 
</section>

       
<section>
    <label>Email:</label>
    <input type='email' placeholder='Enter  your email'/>
</section>

<section>
    <label>Password:</label>
    <input type='password' placeholder='Enter  your Password'/>
</section>

<br></br>

<button type='submit'>Submit</button>
    </div>

)
}

export default App
