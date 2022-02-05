import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';
import '../02-useEffect/effects.css'
/**
 * componente padre, array con numereos , un estado para el valor , una funcion que incrementa el estado del valor 
 * mapea el array numeros con el componente hijo, 
 * @returns 
 */
export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }
    const incrementar= useCallback(
        (num) => {
            setValor( v=>v + num )
        },
        [setValor],
    )

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
