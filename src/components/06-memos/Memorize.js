import React, { useState } from 'react'
import { useCounterFetch } from '../../hooks/useCounterfetch'
import '../02-useEffect/effects.css'
import { Small } from './Small';
export const Memorize = () => {

   const {counter,increment}= useCounterFetch(10);
   const [show, setShow] = useState(true);



    return (
        <div>
            <h1>Counter <Small value={counter}/></h1>
            <hr/>
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
