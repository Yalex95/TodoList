import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounterFetch } from '../../hooks/useCounterfetch'
import { useFetch } from '../../hooks/useFetch'
import './layout.css'

export const Layout = () => {

   const {counter,increment}= useCounterFetch(1);
    const {data}=useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { quote}=!!data&& data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    //similar a useEffect se carga cuando 
    //se renderiza la pagina
    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr/>
           
            <blockquote className='blockquote text-right'>
                <p className='' ref={pTag}>{quote}</p>
            </blockquote>
        
            <button className='btn btn-primary'
            onClick={increment}
            >
                Siguiente frase
            </button>
            <p>{JSON.stringify(boxSize,null,3)}</p>
        </div>
    )
}
