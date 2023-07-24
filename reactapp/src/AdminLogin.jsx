import React, {useState,useContext,useEffect} from 'react'
import {Link} from "react-router-dom"
import './Adminlogin.css'
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode'
function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const[user,setUser]=useState({});
  function handleCallbackResponse(response){
    console.log("JWT ID token: "+response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById('signInDiv').hidden = true;
  }

useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:"879995182368-arnpevmju6i43btcpjl4c9n7c0g41rjh.apps.googleusercontent.com",
      callback:handleCallbackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme:"outline",size:"large"}
    );
   
  });

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'haribalatts@gmail.com' && password === 'Ha@260204') {
     alert('Login successful!');
     history.push('/Intro1');
    } 
    else {
     alert('Invalid email or password');
     history.push('./AdminLogin')
    
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
  
    <div className='login-form '>
      <body>
        <div className='login-card'>
        <h1>
            Admin Login Portal
        </h1>
        <br></br>
      <form>
          MailId:
          <br></br>
          <input type='email' placeholder="Email" value={email} onChange={handleEmailChange} />
          <br />
          Password:
          <br></br>
          <input type='password' value={password} onChange={handlePasswordChange} />
          <br></br>
          <br></br>
          <div id='signInDiv' ></div>
          <button type='submit' className='button-85' onClick={handleLogin} >submit</button>
      </form>
      <br></br>
      <h3>FORGOT PASSWORD</h3>
      </div>
      </body>
    </div>
  )
}

export default AdminLogin
