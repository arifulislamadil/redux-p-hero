import React, { useReducer, useState } from 'react';
import { portalReducer } from './PortalReducer';
import { portalState } from './store/PortalStore';

const Portal = () => {
    const [state,dispatch] = useReducer(portalReducer,portalState);
    const [name,setName] = useState(" ")
    return (
        <div>
            <h3>My Portal</h3>
            <h4>Has Patients :{state.patients.length} </h4>
            <input type="text" onChange={e=> setName(e.target.value)}/>
            <button onClick={()=>dispatch({type: "ADD_PATENT",name:name})}>Add</button>
            <br/>

            <h3>....................................</h3>
            {
                state.patients.map(patient=> <p key={patient.id}>
                    {patient.name} {patient.id}
                    <button onClick = {()=>dispatch({type: "REMOVE_PATIENT",id: patient.id})}>X</button>

                </p>)
            }
        </div>
    );
};

export default Portal;