import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'

function App() {

  const[name,setName] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const [success, setSuccess] = useState(false);


// console.log(name)
// console.log(email)
// console.log(password)
// console.log(user)

let handleSubmit = async ()=>{

  
  let res = await fetch('http://localhost:3000/register',{
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name,email,password })

    });

    let data = await res.json()
   if (data.insertedId) {
      setSuccess(true);
    }
  }

  if (success) {
    return <Login />;
  }

  return(

    <div className="formbox">

    <h1>Registration Page</h1>

    <section>
    <label>Name:</label>
    <input type='text' placeholder='Enter  your Name' onChange={(e)=>setName(e.target.value)}/> 
</section>

       
<section>
    <label>Email:</label>
    <input type='email' placeholder='Enter  your email' onChange={(e)=>setEmail(e.target.value)}/>
</section>

<section>
    <label>Password:</label>
    <input type='password' placeholder='Enter  your Password' onChange={(e)=>setPassword(e.target.value)}/>
</section>

<br></br>

<button type='submit' onClick={handleSubmit}>Submit</button>
    </div>

)
}

export default App
