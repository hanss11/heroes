import { useState } from 'react'

export const useForms = (initialState = {}) => {
    const [values, setValues] = useState(initialState)
    
    const resetInput = () => {
      setValues('');
    };

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return [values,setValues,resetInput,handleInputChange]
    
}
