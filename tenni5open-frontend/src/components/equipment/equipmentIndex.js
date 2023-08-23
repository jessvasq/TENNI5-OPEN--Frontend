import React from 'react'; 
import { Link } from 'react-router-dom';

function EquipmentIndex(props) {
 
  const loaded = () => {
      
    return props.equipments.map((equipment) => (
      <div className='equipment-container'>
      <>
     
        <div className='grid-equip-img'>
          <div key={equipment.id} >
          </div>
          <a href={equipment.store} target="blank">
          <img src={equipment.image} className='img-equipment' alt='equipment-img'/></a> 
        </div>

         {/* <div className='grid-equip-descrip'> */}
         {/* <h1 className='grid-equip-descrip'>{equipment.category}</h1>  */}
         <div>
         <a href={equipment.store} target="blank">
          <h1 className='grid-equip-descrip'> VISIT THE STORE <br/> {equipment.description}</h1></a> 
        </div>
        {/* </div>   */}
     </>
     </div>
    ));
};

const loading = () => {
    return <h1>Loading data...</h1>
  }


return (
<>
<div>
  <h1 className='equip-title'>EQUIPMENT</h1>
   {props.equipments ? loaded() : loading()}
</div>
</>

  )
}

export default EquipmentIndex;
