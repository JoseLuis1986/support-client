import { useCallback, useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
import { ChatContext } from '../context/chat/ChatContext'
import { types } from "../types/types";
import { GlobalContext } from "../context/Provider";

export const AuthContext = createContext();


const initialState = {
    uid: null,
    checking: true,
    logged: false,
    name: null,
    email: null,
    department: null
};

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(initialState);
    const { dispatch } = useContext( ChatContext );
    // const { chatDispatch } = useContext(GlobalContext);

    

    const login = async (email, password) => {

        console.log(email, password)

        const resp = await fetchWithoutToken('login', { email, password }, 'POST');

        if (resp.ok) {
            localStorage.setItem('token', resp.token);

            const { usuario } = resp;
            // console.log(usuario);

            setAuth({
                uid: usuario.uid,
                checking: false,
                logged: true,
                name: usuario.name,
                email: usuario.email,
                department: usuario.department
            })
            // console.log("Autenticado!!");
        }

        return resp.ok;

    };

    const register = async (name, email, password, department) => {

        const resp = await fetchWithoutToken('login/new', { name, email, password, department }, 'POST');

        if (resp.ok) {
            localStorage.setItem('token', resp.token);

            const { usuario } = resp;

            console.log(usuario);

            setAuth({
                uid: usuario.uid,
                checking: false,
                logged: true,
                name: usuario.name,
                email: usuario.email,
                department: usuario.department
            })
            // console.log("Autenticado!!");

            return true;
        }

        return resp.msg;
    };


    const verifyToken = useCallback(async () => {

        const token = localStorage.getItem('token');

        if (!token) {
            setAuth({
                uid: null,
                checking: false,
                logged: false,
                name: null,
                email: null,
                department: null
            })

            return false;
        }
        const resp = await fetchWithToken('login/renew');
        if (resp.ok) {
            localStorage.setItem('token', resp.token);

            const { usuario } = resp;

            console.log(usuario);

            setAuth({
                uid: usuario.uid,
                checking: false,
                logged: true,
                name: usuario.name,
                email: usuario.email,
                department: usuario.department
            })
            console.log("Autenticado!!");
            return true;
        } else {
            setAuth({
                uid: null,
                checking: false,
                logged: false,
                name: null,
                email: null,
                department: null
            })

            return false;
        }

    }, []);


    const logout = () => {
        localStorage.removeItem('token');

        dispatch({ type: types.closeSession });

        setAuth({
            checking: false,
            logged: false
        });

    }



    return (
        <AuthContext.Provider value={{
            auth,
            login,
            register,
            verifyToken,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}