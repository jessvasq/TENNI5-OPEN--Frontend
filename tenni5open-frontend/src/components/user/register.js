import React from 'react'
import { useState } from 'react';

function Register() {
    const [registerForm, setRegisterForm] = useState({
        username: "",       
        email: "", 
        password: "",
      });
    
    
      // handleChange function for form
      const handleChange = (event) => {
        setRegisterForm({ ...registerForm, [event.target.name]: event.target.value });
      };
    
    //redirect to index once logged in 
    
      const redirectPage = () => {
        window.location.href = '/user/login'
      }
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        
        const URL =  "http://localhost:8000/user/register"
        const  response = await fetch(URL, {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: registerForm.username, 
                email: registerForm.email, 
                password: registerForm.password, 
            }),
            credentials: 'include' //includes cookies in the request
        }
        );
    
        if (response.ok) {
            redirectPage()
          }
        
        setRegisterForm({
            username: "",
            email: "",
            password: ""
        });
    }
    
    
    
    
    return (
    <section className='grid-register'>
    <div className='grid-welcome'>
      <img src= '/imgs/tennis_04.jpg' className="login-img"></img> 
    </div>

    <div className='grid-user'>
    <h1 className="login-title">CREATE ACCOUNT</h1>
    <p>Register to host your own tennis match and have access to upcoming tennis tournaments in your area.</p>
    <form onSubmit={handleSubmit}>
      <div className='username-input'>
      <input className='user-input' type="text" value={registerForm.username} name="username" placeholder="USERNAME" onChange={handleChange}/></div>
      <div className='email-input'>
      <input className='user-input' type="text" value={registerForm.email} name="email" placeholder="EMAIL" onChange={handleChange}/> </div>
      <div className='password-input'>
      <input className='user-input' type="password" value={registerForm.password} name="password" placeholder="PASSWORD" onChange={handleChange}/>
      </div>
      <input className="user-pw-bttn" type="submit" value="REGISTER" />
    </form>
    </div>

    </section>
  )
}

export default Register;
