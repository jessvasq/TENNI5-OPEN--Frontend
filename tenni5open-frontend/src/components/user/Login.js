import { useState } from "react";
import Register from "./register";
import { Link } from "react-router-dom";

const Login = () => {

///update thiss!
  const [loginForm, setloginForm] = useState({
    // username: "",
    email: "", 
    password: "",
  });


  // handleChange function for form
  const handleChange = (event) => {
    setloginForm({ ...loginForm, [event.target.name]: event.target.value });
  };

//redirect to index once logged in 
  const redirectPage = () => {
    window.location.href = '/tenni5open/matches'
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try {
    
    const response = await fetch("http://localhost:8000/user/login", {
        method: 'POST', 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // username: loginForm.username, 
            email: loginForm.email, 
            password: loginForm.password
        }),
        credentials: 'include' //includes cookies in the request
    });

    if (response.ok) {
        redirectPage()
      } else { // if the credentials do not match, show an alert
        alert('Invalid credentials')
      }
    

    setloginForm({
        // username: "",
        email: "",
        password: ""
    });
} catch (error) {
  console.log(error, 'error')
  alert('An error occurred during login. Please try again.')
  }
};



return (
  <section className='grid-register'>
    <div className='grid-welcome'>
      <h1 className="welcome-mssg">WELCOME BACK !</h1>
      <img src= '/imgs/tennis_02.jpg' className="login-img"></img> 
    </div>
  <div className='grid-user'>
  <h1 className="login-title">SIGN IN</h1>
  <form onSubmit={handleSubmit}>
    <div className='email-input'>
    <input  className='user-input'
      type="text"
      value={loginForm.email}
      name="email"
      placeholder="EMAIL"
      onChange={handleChange}
    />
    </div>

    <div className='password-input'>
    <input className='user-input'
      type="password"
      value={loginForm.password}
      name="password"
      placeholder="PASSWORD"
      onChange={handleChange}
    />
    </div>

    <input className="user-pw-bttn" type="submit" value="LOG IN" />
   </form>
   <div>
   <Link to='/user/register'>
      <h2 className='new-user'>NEW USER</h2>
   </Link>
   </div>
   </div>
</section>

  );
}

export default Login;
