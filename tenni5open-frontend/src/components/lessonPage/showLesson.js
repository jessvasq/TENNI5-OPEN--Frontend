import React from 'react';
import {useParams} from "react-router-dom" 

function ShowLesson(props) {


const params = useParams();
const id = params.id; 
const lessons = props.lessons; 
const lesson = lessons.find((p) => p.id === Number(id)); 


  return (
    <div>
    <h1>SHOW</h1>
    <h2 >Title: {lesson.title}</h2> 
    </div>
 

  ) };

export default ShowLesson;
   