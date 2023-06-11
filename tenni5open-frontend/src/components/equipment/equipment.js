import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import EquipmentIndex from './equipmentIndex';
import ShowEquipment from './showEquipment';

///EQUIPMENT PAGE 


function Equipment (props) {

    const URL = 'http://localhost:8000/equipment/'

    const [ equipment, setEquipment ] = useState([]);


    //fetch data from backend 
    const getEquipment = async () => {
        try{
            //make an HTTP GET request to our backend
            const response = await fetch (URL, {
                credentials: 'include',
              } )
            const data = await response.json();
            //sets the value of data to setEquipment (saving the data in state)
            setEquipment(data.data);
            console.log(data.data)
        }
        catch (error) {
            console.log('Error:', error);
        }
    }


    //useEffect
    useEffect(() => {
        getEquipment();
    }, []);
  

    return (
        <div>
          <Routes>
           <Route path='/equipment' element={<EquipmentIndex equipments={equipment} />}/>
           <Route path='/equipment/:id' element={<ShowEquipment equipments={equipment} />}/>
          </Routes>
        </div>
      )
    };

export default Equipment;



    

