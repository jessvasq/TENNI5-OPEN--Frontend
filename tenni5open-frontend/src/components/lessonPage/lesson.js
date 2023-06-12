import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import LessonIndex from './lessonIndex';
import ShowLesson from './showLesson';

///HOW TO TENNIS PAGE 


function Lesson (props) {

    const URL = 'http://localhost:8000/lessons/'

    const [ lesson, setLesson ] = useState([]);


    //fetch data from backend 
    const getLesson = async () => {
        try{
            //make an HTTP GET request to our backend
            const response = await fetch (URL)
            const data = await response.json();
            //sets the value of data to setLesson (saving the data in state)
            setLesson(data.data);
            console.log(data.data)
        }
        catch (error) {
            console.log('Error:', error);
        }
    }


    //useEffect
    useEffect(() => {
        getLesson();
    }, []);
  

    return (
        <div>
          <Routes>
           <Route path='/lessons' element={<LessonIndex lessons={lesson} />}/>
           <Route path='/lessons/:id' element={<ShowLesson lessons={lesson} />}/>
          </Routes>
        </div>
      )
    };

export default Lesson;



    

