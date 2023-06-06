import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      <div key={match.id} >
        <Link to={`/tenni5open/matches/${match.id}`}> 
          <img src={match.image}/>
          <h1>{match.description} , {match.location}</h1> 
        </Link>
      </div>
    ));
  };
  

  const loading = () => {
    return <h1>Loading data...</h1>
  }


  return (
    <div>
    <h1>UPCOMING MATCHES</h1>

    Search: <input type="text" placeholder='Search by location' value={searchQuery} onChange={handleChange} />
    {props.matches ? loaded() : loading()}

  </div>
  )
}

export default MatchIndex;
