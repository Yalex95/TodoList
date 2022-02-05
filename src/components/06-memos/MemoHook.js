import React, { useMemo, useState } from 'react'
import { useCounterFetch } from '../../hooks/useCounterfetch'
import '../02-useEffect/effects.css'
import { procesoPesado } from '../helpers/ProcesoPesado';
// import { Small } from './Small';
export const MemoHook = () => {

   const {counter,increment}= useCounterFetch(1000);
   const [show, setShow] = useState(true);

   
    //memoriza para no actualizar o no llamar una funcion si no es necesario
    const memoProcesoPesado=useMemo(() => procesoPesado(counter), [counter])
    return (
        <div>
            <h1>Memo hook</h1>
            <h3>Counter <small>{counter}</small></h3>
            <hr/>
            <p>{memoProcesoPesado}</p>
            <button 
            className='btn btn-primary '
            onClick={increment}
            >
                +1
            </button>
            <button
            className='btn btn-outline-primary ms-5'
            onClick={()=>{
                setShow(!show);
            }}
            >
                show/hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
