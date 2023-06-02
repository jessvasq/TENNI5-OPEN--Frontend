import { useState, useEffect } from "react";


const Logout = (props) => {

//redirect to index once logged out 

  const redirectPage = () => {
    window.location.href = '/tenni5open'
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const response = await fetch("http://localhost:8000/user/logout", {
        method: 'GET', 
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include' //includes cookies in the request
    }
    );

    if (response.ok) {
        redirectPage()
      }
  }

return (
  <section>
  <h1>LOGOUT</h1>
  <form onSubmit={handleSubmit}>
    <input type="submit" value="LOG OUT" />
   </form>
</section>

  );
}

export default Logout;
