import React,{memo} from 'react'

//memo disparara la funcion si detecta que algo cambio
export const Small = memo(({value}) => {
    console.log('small again!')
    return (
        <small>
            {value}
        </small>
    )
})
