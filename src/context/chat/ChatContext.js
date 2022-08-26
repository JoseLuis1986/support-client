import React,{ createContext, useReducer } from 'react';
import { chatReducer } from './chatReducer';



export const ChatContext = createContext();

const initialState = {
    uid: '',
    chatActive: null, //UID del usuario al que yo quiero enviar mensajes 
    users: [], // Todos los usuarios de la base de datos
    msjs: [],//el chat seleccionado 
    notes: []
}

export const ChatProvider = ({ children }) => {

    const [chatState, dispatch] = useReducer( chatReducer, initialState );


    return(
        <ChatContext.Provider value={{
            chatState,
            dispatch
        }}>
            { children }
        </ChatContext.Provider>
    )
}

