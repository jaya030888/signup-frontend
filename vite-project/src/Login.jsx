import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect} from 'react';
import Dashboard from './Dashboard';
import GetLost from './GetLost';

function Login() {

   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
   const [success, setSuccess] = useState(false);
   const[lost,setLost]=useState(false)



const addLogin = async () => {

let res = await fetch('http://localhost:3000/login', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({email,password })
});


let data = await res.json()
if (data.message) {
    setSuccess(true)
    }
    else{
        setLost(true)
    }
};


if(success){
   return <Dashboard /> 
}

if(lost){
    return <GetLost/>
}


  return(

    <div className="formbox">

    <h1>Login Page</h1>

       
<section>
    <label>Email:</label>
    <input type='email' placeholder='Enter  your email' onChange={(e)=>setEmail(e.target.value)}/>
</section>

<section>
    <label>Password:</label>
    <input type='password' placeholder='Enter  your Password' onChange={(e)=>setPassword(e.target.value)}/>
</section>

<br></br>

<button type='submit' onClick={addLogin}>Submit</button>
    </div>

);}

export default Login
