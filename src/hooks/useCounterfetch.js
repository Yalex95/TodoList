import { useState } from "react"

/**
 * los hooks son funciones
 * espera argimento initialState, si no envia nada por defult es 10
 * @returns un objecto con las funciones
 */
export const useCounterFetch = (initialState=10) => {
    const [counter, setCounter] = useState(initialState);
    
    const increment=()=>{
        setCounter(counter+1);
    }

    const decrement=()=>{
        setCounter(counter -1 );
    }
    const reset=()=>{
        setCounter(initialState);
    }
    return{
        counter,
        increment,
        decrement,
        reset
    }
}
