import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MatchIndex(props) {

  const loaded = () => {
    return (props.matches.map((match) => (
      <div key={match.id}>
      <Link to={`/tenni5open/${match.id}`}> 
        <img src={match.image}/>
        <h1>{match.description} , {match.location}</h1> 
      </Link>

      </div>
    )));
  };

  const loading = () => {
    return <h1>Loading data...</h1>
  }



  return (
    <div>
    <h1>UPCOMING MATCHES</h1>
       {props.matches ? loaded() : loading()}
  </div>
  )
}

export default MatchIndex;
