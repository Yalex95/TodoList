import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css'

export const FormWithCustomHooks = () => {
    //useeffect es una funcion que permite ejecutar una funcion secundaria
    //se dispara cuando se renderisa por primera vez
    const [formValues, handleInputChange] = useForm({
        name:'',
        email:'',
        password:'',
    });
    //desestructuracion para que sea mas facil manejarlos datos
    const {name,email,password}=formValues;
    useEffect(() => {
        
        console.log('email cambio')
    }, [email])
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(formValues);

    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHooks</h1>
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
            <div className='form-group mt-5'>
                <input 
                type="password"
                name="password"
                className="form-control"
                placeholder='***'
                value={password}
                onChange={handleInputChange}
                />
            </div>
            <button type='submit' className='btn btn-primary mt-3'>Guardar</button>
        </form>
    )
}
