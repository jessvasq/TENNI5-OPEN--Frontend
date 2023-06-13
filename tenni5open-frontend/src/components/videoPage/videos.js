import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import VideosIndex from './videosIndex';
import ShowVideos from './showVideos';


///VIDEO PAGE 


function Videos (props) {

    const URL = 'http://localhost:8000/highlights/'

    const [ video, setVideo ] = useState([]);


    //fetch data from backend 
    const getVideo = async () => {
        try{
            //make an HTTP GET request to our backend
            const response = await fetch (URL, {
                credentials: 'include',
              } )
            const data = await response.json();
            //sets the value of data to setVideo (saving the data in state)
            setVideo(data.data);
            console.log(data.data)
        }
        catch (error) {
            console.log('Error:', error);
        }
    }


    //CREATE
    const createVideo = async (video) => {
        try{
            //make an HTTP POST request to our backend
            await fetch (URL, {
                method: "POST", 
                headers: {
                    'Content-Type': "application/json" //indicates that the request body is in JSON
                },
                body: JSON.stringify(video)
            });
            //update list of available videoes after video is created
            getVideo()
        }
        catch (error) {
            console.log('Error:', error);
        }
      }
    

    //useEffect
    useEffect(() => {
        getVideo();
    }, []);
  

    return (
        <div>
          <Routes>
           <Route path='/highlights' element={<VideosIndex videos={video} />}/>
           <Route path='/highlights/:id' element={<ShowVideos videos={video} />}/>
          </Routes>
        </div>
      )
    };

export default Videos;



    

