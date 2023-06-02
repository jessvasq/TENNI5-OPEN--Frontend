import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import MatchIndex from './matchIndex'

function Main (props) {

    const [ match, setMatch ] = useState([]);

    const URL = 'http://localhost:8000/tenni5open/'

    //fetch data from backend 
    const getMatch = async () => {
        try{
            //make an HTTP GET request to our backend
            const response = await fetch (URL)
            const data = await response.json();
            //sets the value of data to setMatch (saving the data in state)
            setMatch(data.data);
            console.log(data.data)
        }
        catch (error) {
            console.log('Error:', error);
        }
    }


    //CREATE
  

    //UPDATE



    //DELETE 

    //useEffect
    useEffect(() => {
        getMatch();
    }, []);
  

    return (
        <div>
          <Routes>
           <Route path='/tenni5open' element={<MatchIndex matches={match}/>}/>
          </Routes>
        </div>
      )
    };

export default Main
