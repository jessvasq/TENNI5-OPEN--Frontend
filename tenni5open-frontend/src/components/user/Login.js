import { useState, useEffect } from "react";


const Login = (props) => {

///update thiss!
  const [loginForm, setloginForm] = useState({
    username: "",
    email: "", 
    password: "",
  });


  // handleChange function for form
  const handleChange = (event) => {
    setloginForm({ ...loginForm, [event.target.name]: event.target.value });
  };

//redirect to index once logged in 

  const redirectPage = () => {
    window.location.href = '/tenni5open'
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    
    const response = await fetch("http://localhost:8000/user/login", {
        method: 'POST', 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: loginForm.username, 
            email: loginForm.email, 
            password: loginForm.password
        }),
        credentials: 'include' //includes cookies in the request
    }
    );

    if (response.ok) {
        redirectPage()
      }
    
    setloginForm({
        username: "",
        email: "",
        password: ""
    });
}



return (
  <section>
  <h1>LOGIN</h1>
  <form onSubmit={handleSubmit}>
  <input
      type="text"
      value={loginForm.username}
      name="username"
      placeholder="username"
      onChange={handleChange}
    />
    <input
      type="text"
      value={loginForm.email}
      name="email"
      placeholder="email"
      onChange={handleChange}
    />
    <input
      type="password"
      value={loginForm.password}
      name="password"
      placeholder="password"
      onChange={handleChange}
    />
    
    <input type="submit" value="LOG IN" />
   </form>
</section>

  );
}

export default Login;
