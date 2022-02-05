import React from 'react'
import { useCounterFetch } from '../../hooks/useCounterfetch'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {
   const {counter,increment}= useCounterFetch(1);
    const {loading,data}=useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {author, quote}=!!data&& data[0];
    

    return (
        <div>
            <h1>Breaking bad quotes</h1>
            <hr/>
            {
            loading
            ?
                (<div className='alert alert-info text-center'>
                    Loading...
                </div>)
            :
                (<blockquote className='blockquote text-right'>
                    <p className=''>{quote}</p>
                    <footer className='blockquote-footer'>{author}</footer>
                </blockquote>)
            }
            <button className='btn btn-primary'
            onClick={increment}
            >
                Siguiente frase
            </button>
        </div>
    )
}
