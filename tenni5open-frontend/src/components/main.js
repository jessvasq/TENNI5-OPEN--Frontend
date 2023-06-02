import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import CreateMatch from './createForm';
import MatchIndex from './matchIndex';
import ShowMatch from './ShowMatch';

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
    const createMatch = async (match) => {
        try{
            //make an HTTP POST request to our backend
            await fetch (URL, {
                method: 'POST', 
                headers: {
                    'Content-Type': "application/json"
                },
                //specifies the credentials to include when making the request. We want to include user credentials "cookies" in the request . The server will then verify the credentials, provide access to this route and process this request. 
                credentials: 'include',
                body: JSON.stringify(match)
            });
            //update list of available matches after match is created
            getMatch()
        }
        catch (error) {
            console.log('Error:', error);
        }
      }
    

    //UPDATE



    //DELETE 

    //useEffect
    useEffect(() => {
        getMatch();
    }, []);
  

    return (
        <div>
          <Routes>
           <Route path='/tenni5open/' element={<MatchIndex matches={match} />}/>
           <Route path='/tenni5open/create' element={<CreateMatch createMatch={createMatch} />}/>
           <Route path='/tenni5open/:id' element={<ShowMatch matches={match}/>}/>
          </Routes>
        </div>
      )
    };

export default Main
