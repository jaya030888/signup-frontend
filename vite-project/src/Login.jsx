import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect} from 'react';

function Login() {

   const [login, setLogin] = useState([]);
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');




const fetchLogin = async () => {
const res = await fetch('http://localhost:3000');
const data = await res.json();
setLogin(data);
};


useEffect(() => {
fetchLogin();
}, []);


const addLogin = async () => {
await fetch('http://localhost:3000', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({email,password })
});
setEmail('');
setPassword('');
fetchLogin();
};


  return(

    <div className="formbox">

    <h1>Login Page</h1>

       
<section>
    <label>Email:</label>
    <input type='email' placeholder='Enter  your email'/>
</section>

<section>
    <label>Password:</label>
    <input type='password' placeholder='Enter  your Password'/>
</section>

<br></br>

<button type='submit' onClick={addLogin}>Submit</button>
    </div>

);}

export default Login
