import React from 'react';
import {useParams, useNavigate, Link } from "react-router-dom" 

function ShowVideos(props) {


const params = useParams() 
const navigate = useNavigate()
const id = params.id; 
const videos = props.videos; 
const video = videos.find((p) => p.id === Number(id)); 


  return (
    <div>
    <h1>SHOW</h1>
    <h2>{video.video}</h2>
    <h2>Description: {video.description}</h2> 
    <h2>Host: {video.title}</h2> 
    </div>
 

  ) };

export default ShowVideos;
   