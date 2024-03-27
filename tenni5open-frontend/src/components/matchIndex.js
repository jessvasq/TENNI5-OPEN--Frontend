import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PopUp from './PopUp';

function MatchIndex(props) {

  //Set state to store user's input 
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

//Array method that checks 'props.matches' to check if the user's searchQuery matches an existing dog name 
                      //matches is being passes as a prop 
const filteredMatch = props.matches.filter((match) => { //filter() iterates over each element in the array and creates a new array 'filteredMatch' with the objects that match the query
  const userInput = searchQuery.toLowerCase()
  return match.location.toLowerCase().includes(userInput); //check if user's input exist. Returns true if there's a match
});


  const loaded = () => {
    //check if there are no matches
    if (filteredMatch.lenght === 0) {
      return <h1>No matches found in this location</h1>;
    }

    return filteredMatch.map((match) => (
      <div className='grid-matches'>

          <div className='grid-matches-descrip'>
          <h1 className='match-location'>{match.location} </h1> 
          <h1 className='match-details'> {match.description} </h1>
          </div>

          <div className='grid-matches-img'>
            <div key={match.id} >
              <Link to={`/tenni5open/matches/${match.id}`}> 
              <img src={match.image} className= "img-matches"/>
              </Link>
          </div>
          </div>

         </div>
       
    ));
  };
  

  const loading = () => {
    return <h1>Loading data...</h1>
  }


  return (
    <div className='search-container'>
    <h1 className='matches-title'>UPCOMING MATCHES</h1>

   <input className='search-bar' type="text" placeholder='SEARCH BY LOCATION' value={searchQuery} onChange={handleChange} />
    {props.matches ? loaded() : loading()}

    {<PopUp />}

    
  </div>
  )
}

export default MatchIndex;
