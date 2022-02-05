import { useState } from "react"

/**
 * los hooks son funciones
 * espera argimento initialState, si no envia nada por defult es 10
 * @returns un objecto con las funciones
 */
export const useCounter = (initialState=10) => {
    const [state, setState] = useState(initialState);
    
    const increment=(factor=1)=>{
        setState(state+factor);
    }

    const decrement=(factor=1)=>{
        setState(state - factor);
    }
    const reset=()=>{
        setState(initialState);
    }
    return{
        state,
        increment,
        decrement,
        reset
    }
}
