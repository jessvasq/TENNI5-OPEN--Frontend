import React from 'react';
import {useParams, useNavigate, Link } from "react-router-dom";

function ShowEquipment(props) {

  const params = useParams() 
  const id = params.id; 
  const equipments = props.equipments; 
  const equipment = equipments.find((p) => p.id === Number(id)); 
  
  
    return (
      <div>
      <h1>EQUIPMENT</h1>
      <h2>Store:{equipment.store}</h2>
      <h2>Category: {equipment.category}</h2> 
      <h2>Image: {equipment.image}</h2> 
      <h2>Description: {equipment.description}</h2> 
      </div>

  )
}

export default ShowEquipment;
