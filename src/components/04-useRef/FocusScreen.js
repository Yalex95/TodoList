import React, { useRef } from 'react'
import '../02-useEffect/effects.css'
export const FocusScreen = () => {
    /**
     * use ref es para mantener una referencia mutable
     */
    const inputRef = useRef();
    // console.log(ref);

    const handleClick =()=>{
        
        // document.querySelector('input').select();
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>

            <input
            ref={inputRef}
            className='form-control'
            placeholder='nombre'
            />
            <button 
            className='btn btn-primary mt-5'
            onClick={handleClick}
            >
                Focus
            </button>
                

        </div>
    )
}
