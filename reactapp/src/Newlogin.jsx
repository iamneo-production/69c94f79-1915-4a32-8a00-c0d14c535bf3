// import React, { Component } from 'react';
// import './Adminlogin.css';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// // import { useHistory } from 'react-router-dom';
// // import { withRouter } from 'react-router-dom';
// class NewLogin extends Component {
//   // handleButtonClick = () => {
//   //   // Replace 'path/to/your/page' with the desired URL to navigate to
//   // };
//   constructor(props){
//     super(props);
//     this.state={
       
//       phonenumber:'',
//     };
// }

// handlephonenumberChange=(event)=>{
//   this.setState({phonenumber:event.target.value})
// };
// handleSubmit = (event) => {
//   event.preventDefault();
//   const data = {
//     phonenumber:this.state.phonenumber 
//   };
  
//   console.log(data);
//   axios.post('http://localhost:8080/postplay1',data)
//   .then( alert("DONE!!!!!"))
//   this.props.history.push('/Intro1');
  
  
// };

//   render() {
//     return (
      
//       <div className='login-form'>
//         <body>
//           <div className='login-card'>
//             <h1>User Registration Portal</h1>
//             <br></br>
//             <form onSubmit={this.handleSubmit}>
//               PhoneNumber:
//               <br></br>
//               <input type='number' value={this.phonenumber}onChange={this.handlephonenumberChange}></input>
//               <br />
//               <br></br>
//               <button type='submit' className='button-85'onClick={this.handleButtonClick}>
//                Login
//               </button>
//               <br></br>
//               <br>
//               </br>
//               <botton type='submit' className='button-85'><Link to="Securitylogin">Register</Link></botton>
//             </form>
//             <br></br>
//           </div>
//         </body>
//       </div>
//     );
//   }
// }

// export default NewLogin;

import React, { useState } from 'react';
import './Securitylogin.css';
import {Link} from "react-router-dom"
import axios from 'axios'
import { useHistory } from 'react-router-dom'
const SignupPage = () => {
    //  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailerror, setemailError] = useState('');
    const [passwordError, setpasswordError] = useState('');
    const [apiError, setApiError] = useState('');
    const history=useHistory();

    // const [registrationError,setRegistrationError] = useState('');
   

    // const checkPassword = (e) =>{
    //   const passwordRegex =/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    //   if (!passwordRegex.test(password)) {
    //     window.alert(
    //       "Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
    //     );
    //     initialize1()
    //     return;
    //   }
    //   else if (password !== confirmpassword) {
    //     window.alert("Passwords do not match.");
    //     initialize2()
    //     return;
    //   }
    //   else{
    //     window.alert("Registration Successful !!!");
    //   }
    // }
    // const initialize1 = () =>{
    //   setPassword('')
    //   setConfirmPassword('')
    // }
    // const initialize2 = () =>{
    //   setConfirmPassword('')
    // }
  
    // const handleNameChange = (event) => {
    //     setName(event.target.value);
    //   };
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
    
   



    // const handleSubmit= async (e)=>{
    //   e.preventDefault();
    //   try {
    //     const response = await axios.post(
    //       "http://127.0.0.1:8181/api/v1/auth/register",
    //       {
    //         // name,
    //         email,
    //         password,
    //         // confirmpassword,
    //       },
    //     );
  
    //     console.log("Sign in successful");
    //     console.log(response.data); 
       
  
        // setName("");
        // setEmail("");
        // setMobile("");
        // setPassword("");
        // setRegistrationError("");
  //     } catch (error) {
  //       console.error("Registration failed");
  //       console.error(error); 
  
  //     }
  // }
    // Function to handle form submission
    const handlesignin=()=>{
      history.push('./Intro1')
    }
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate email and password
    let isValid = true;

    // Email validation
    if (!email.trim()) {
      setemailError('Please enter your email');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setemailError('Please enter a valid email');
      isValid = false;
    }

    // Password validation
    if (!password.trim()) {
      setpasswordError('Please enter your password');
      isValid = false;
    } else if (password.length < 8) {
      setpasswordError('Password should be at least 8 characters long');
      isValid = false;
    }

    // if (isValid) {
    //   try {
    //     const response = await axios.post('http://127.0.0.1:8181/api/v1/auth/authenticate', {
    //       email: email,
    //       password: password
    //     });

    //     console.log(response.data);
    //     localStorage.setItem('token', response.data.token);
    //     console.log(localStorage.getItem('token'));

    //     alert("Login Successful.");
    //     history.push("./Intro1");
    //   } catch (error) {
    //     console.error('Error:', error);
        
    //     setApiError('*Invalid email or password');
    //   }
      
    // }
    const loginData = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post('http://127.0.0.1:8181/api/v1/auth/authenticate', loginData);
      // The backend should respond with a success status if login is valid
      if (response.status === 200) {
        // Handle successful login (e.g., redirect to dashboard page)
        console.log('Login successful!');
      } else {
        // Handle invalid login (e.g., show error message)
        console.log('Invalid login credentials.');
      }
    } catch (error) {
      // Handle API request error (e.g., show error message)
      console.log('Error:', error.message);
    }
  };
  return (
    <div className='logo1'>
    <div className="signup-page"> 
    <div className="signup1-page">
      <div className="signup-container">
      <h2>Login with your registered email</h2>
      <p className='ab1'>.....................................................................................</p>
         <form onSubmit={handleSubmit}>

        <h4 className='a1'>Email:</h4>
         <input
            type="email"
            className='signupinput'
            placeholder="Enter your Email"
            value={email}
            onChange={handleEmailChange}
            required
          />

         
          <h4 className='a1'>Password:</h4>
          <input
            type="password"
            className='signupinput'
            placeholder="Enter New Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <br></br>
        <br></br>
          <button type="submit"  className='button-85'onClick={handlesignin}><b>Sign in</b></button>
           <br></br>
           <br></br>
           <botton type='submit' className='button-85'><Link to="Securitylogin">Register</Link></botton>
        </form>
        {/* <h4 className='a1' color='white'>Existing User?</h4>
          <div className="create1"><Link to="/"><div className="b1"><u>Log Into Your Account</u></div></Link></div>   */}
          </div>
      </div>
    </div>
    
    </div>
  );
};

export default SignupPage;