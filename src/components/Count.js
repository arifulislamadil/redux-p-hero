import React, { useReducer } from 'react';

const countState = {
    clicks: 0,
    active: true,
    count: 0
}

const countAction = (state = countState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return{
                ...state,
                count: state.count + 1
            }
            break;
        case "DECREMENT":
            return{
                ...state,
                count: state.count-1
            }
            break;
        default:
            state:
            break;
    }
}

const Count = () => {
    const [state, dispatch] = useReducer(countAction, countState);
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={()=>dispatch({type: "INCREMENT"})}>Incress</button>
            <button onClick={()=>dispatch({type: "DECREMENT"})}>Decress</button>
            
        </div>
    );
};

export default Count;