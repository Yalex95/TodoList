import React, { useEffect,useState } from 'react'
import './effects.css'
import { Message } from './Message';
/**
 * componente que maneja un estado , es un objeto que tiene nombre e email
 * 
 * @returns 
 */
export const SimpleForms = () => {
    //useeffect es una funcion que permite ejecutar una funcion secundaria
    //se dispara cuando se renderisa por primera vez
    const [formState, setFormState] = useState({
        name:'',
        email:''
    });
    //desestructuracion para que sea mas facil manejarlos datos
    const {name,email}=formState;


    useEffect(()=>{
        console.log('hey')
    },[])

    //escuchar todos los cambios de un argumento
    useEffect(()=>{
        console.log('FormState cambio')//se imprimira cada que se haga un cambio
    },[formState])

    useEffect(()=>{
        console.log('email cambio')//se imprimira cada que se haga un cambio
    },[email])


    const handleInputChange=({target})=>{
      setFormState({
          ...formState,
          [target.name]:target.value
      })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <div className='form-group'>
                <input 
                type="text"
                name="name"
                className="form-control"
                placeholder='Tu nombre'
                autoComplete='off'
                value={name}
                onChange={handleInputChange}
                />
            </div>
            <div className='form-group mt-5'>
                <input 
                type="text"
                name="email"
                className="form-control"
                placeholder='Tu correo'
                autoComplete='off'
                value={email}
                onChange={handleInputChange}
                />
            </div>
            {(name==='123') && <Message/>}
        </>
    )
}
