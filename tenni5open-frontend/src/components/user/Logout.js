import { Link } from "react-router-dom";


const Logout = (props) => {

//redirect to index once logged out 

  const redirectPage = () => {
    window.location.href = '/'
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
<div>
  <div className='popup-container'>
    <div className='popup-box'>
            <h1 className='popup-h1'>SAD TO SEE YOU LEAVE</h1>
            <h1 className='popup-des'> Are you sure? You won't receive new notifications if you log out.</h1>
            <form onSubmit={handleSubmit}>
                 <input className='pop-bttn' type="submit" value="Yes, Log Out" />
             </form>
            <Link to='/tenni5open/matches'>
            <button className='pop-bttn1'>Cancel
              </button>
            </Link>
    </div>
  </div>

</div>

  );
}

export default Logout;
