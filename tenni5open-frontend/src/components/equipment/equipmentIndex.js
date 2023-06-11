import React from 'react'

function EquipmentIndex(props) {
 
  const loaded = () => {
      
    return props.equipments.map((equipment) => (
      <>
      <div>
      
      </div>
     <div key={equipment.id} >
     <h1>{equipment.image}</h1>
     <h1>{equipment.category}</h1>
     <h1>{equipment.store}</h1>
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
