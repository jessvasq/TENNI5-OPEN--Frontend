import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useParams } from "react-router-dom" 
 

function ShowMatch(props) {


const params = useParams() 
const id = params.id; 
const matches = props.matches; 
const match = matches.find((p) => p.id === Number(id)); 
 
return ( 
<>
<div className="match"> 
<h1>{match.location}</h1> 
<img src={match.image} /> 
<h2>{match.description}</h2> 
<h2>{match.date}</h2> 
<h2>{match.players}</h2> 
<h2>{match.skill_level}</h2> 
<h2>{match.price}</h2> 
</div> 
</>
); 
} 

export default ShowMatch;

