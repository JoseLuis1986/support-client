import { useState, useEffect } from "react"

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    useEffect(() => {
        const email = localStorage.getItem('email');
        if (email) {
            setValues((values) => ({
                ...values,
                email,
                rememberme: true
            }))
        }
        
    }, []);

    const toggleCheck = () => {
        setValues({
            ...values,
            rememberme: !values.rememberme
        })
    }

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return [values, handleInputChange, toggleCheck];
}