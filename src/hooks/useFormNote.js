import { useState } from 'react';


export const useFormNote = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = ( newFormState = initialState) => {
        setValues( newFormState );
    }


    // const stateCheck = ({target}) => {

    //     const checked = target.checked;
    //     if(checked){
    //         setValues({
    //             ...values,
    //             [target.name]: target.value
    //         })
    //     }

    // };


    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    return [ values, handleInputChange, reset ];

}