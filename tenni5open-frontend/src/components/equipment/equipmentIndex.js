import React from 'react'; 
import { Link } from 'react-router-dom';

function EquipmentIndex(props) {
 
  const loaded = () => {
      
    return props.equipments.map((equipment) => (

      <>
      
      <div>
      </div>
     <div key={equipment.id} >
     <a href={equipment.store} target="blank">
     <img src={equipment.image}/></a> 
     <h1>{equipment.category}</h1>
     <h1>{equipment.description}</h1>
     </div>
     </>
    ));
};

const loading = () => {
    return <h1>Loading data...</h1>
  }


return (
<>
<div>
  <h2>EQUIPMENT</h2>
   {props.equipments ? loaded() : loading()}
</div>
</>

  )
}

export default EquipmentIndex;
