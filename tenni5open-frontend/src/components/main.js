import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import CreateMatch from './createForm';
import MatchIndex from './matchIndex';
import ShowMatch from './ShowMatch';
import Register from './user/register';
import Login from './user/Login';
import Logout from './user/Logout';
import About from '../about';

//MY MATCHES//
import MyMatchesIndex from './myMatches/MyMatches';
import ShowMyMatch from './myMatches/showMyMatch';


function Main (props) {

    const [ match, setMatch ] = useState([]);

    const URL = 'http://localhost:8000/tenni5open/'

    //fetch data from backend 
    const getMatch = async () => {
        try{
            //make an HTTP GET request to our backend
            const response = await fetch (URL, {
              credentials: 'include',
            } )
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
                method: "POST", 
                headers: {
                    'Content-Type': "application/json" //indicates that the request body is in JSON
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
    const updateMatch = async (match, id) => {
        // make PUT request to update match 
        try {
          await fetch(URL + id, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify(match),
          });
         // update list
         getMatch();
         getMyMatch();
      }
        catch (error) {
          console.log('Error:', error)
        }
      };

    //DELETE 
    
    const deleteMatch = async (id) => {
      //make delete request to delete a match
      try {
        await fetch (URL + id, {
          method: 'DELETE', 
          credentials: 'include', 
        });
      getMatch();
      getMyMatch();
      }
    catch (error) {
      console.log('Error:', error)
      };
    };


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///  MY MATCHES  ///

  const URL1 = 'http://localhost:8000/tenni5open/mymatches'

  const [ myMatch, setMyMatch ] = useState([]);

  //INDEX
  const getMyMatch = async () => {
    try{
        //make an HTTP GET request to our backend
        const response = await fetch (URL1, {
          credentials: 'include',
        } 
          )
        const data = await response.json();
        //sets the value of data to setMatch (saving the data in state)
        setMyMatch(data.data);
        console.log(data.data);
        
    }
    catch (error) {
        console.log('Error:', error);
    }
}

  //ADD

  const addMatch = async (myMatch) => {
          try{
              //make an HTTP POST request to our backend
              await fetch (URL1, {
                  method: "POST", 
                  headers: {
                      'Content-Type': "application/json" //indicates that the request body is in JSON
                  },
                  //specifies the credentials to include when making the request. We want to include user credentials "cookies" in the request . The server will then verify the credentials, provide access to this route and process this request. 
                  credentials: 'include',
                  body: JSON.stringify(myMatch)
              });
              //update list of available matches after match is created
              getMyMatch()
          }
          catch (error) {
              console.log('Error:', error);
          }
        }


  //DELETE  
    
    const deleteMyMatch = async (id) => {
      //make delete requeste to delete a match
      try {
        await fetch (URL1 + id, {
          method: 'DELETE', 
          credentials: 'include', 
        });
      getMyMatch();
      }
    catch (error) {
      console.log('Error:', error)
      };
    };


  
    //UPDATE  

    const updateMyMatch = async (myMatch, id) => {
      // make PUT request to update match 
      try {
        await fetch(URL1 + id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: 'include',
          body: JSON.stringify(myMatch),
        });
       // update list
       getMatch();
    }
      catch (error) {
        console.log('Error:', error)
      }
    };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //useEffect
    useEffect(() => {
        getMatch();
        ///My matches//
        getMyMatch();
    }, []);
  

    return (
        <div>
          <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/tenni5open/matches' element={<MatchIndex matches={match} />}/>
           <Route path='/tenni5open/create' element={<CreateMatch matches={match} createMatch={createMatch}/>}/>
           <Route path='/tenni5open/matches/:id' element={<ShowMatch matches={match} updateMatch={updateMatch} deleteMatch={deleteMatch} addMatch={addMatch}/>}/>
           <Route path='/user/register' element={<Register/>}/>
           <Route path='/user/login' element={<Login />}/>
           <Route path='/user/logout' element={<Logout/>}/>
           <Route path='/about' element={<About/>}/>

           {/* MY MATCHES */}
           <Route path='/tenni5open/mymatches' element={<MyMatchesIndex matches={myMatch} />}/>
           <Route path='/tenni5open/mymatches/:id' element={<ShowMyMatch matches={myMatch} updateMatch={updateMatch} deleteMatch={deleteMatch} />}/>


          </Routes>
        </div>
      )
    };

export default Main;
