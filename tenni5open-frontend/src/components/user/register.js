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
    <section>
    <h1>REGISTER</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" value={registerForm.username} name="username" placeholder="username" onChange={handleChange}/>
      <input type="text" value={registerForm.email} name="email" placeholder="email" onChange={handleChange} />
      <input type="password" value={registerForm.password} name="password" placeholder="password" onChange={handleChange}/>
      <input type="submit" value="REGISTER" />
    </form>
    </section>
  )
}

export default Register;
