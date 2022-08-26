import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { scrollToBottomAnimated } from '../helpers/scrollToBottom';
import { useSocket } from '../hooks/useSocket'
import { types } from '../types/types';
import { ChatContext } from './chat/ChatContext';
// import { NoteContext } from './notes/NoteContext';

export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const { socket, online, connectSocket, disconnectSocket } = useSocket('http://localhost:3001');

    const { auth } = useContext(AuthContext);

    const { dispatch } = useContext(ChatContext);


    useEffect(() => {
        if (auth.logged) {
            connectSocket();
        }
    }, [auth, connectSocket]);


    useEffect(() => {
        if (!auth.logged) {
            disconnectSocket();
        }
    }, [auth, disconnectSocket]);

    //Escuchar los cambios de los usuarios conectados
    useEffect(() => {
        socket?.on('list-users', (users) => {
            dispatch({
                type: types.usersLoaded,
                payload: users
            })
        })
    }, [socket, dispatch]);


    useEffect(() => {
        socket?.on('personal-message', (msg) => {
            // Dispatch de una accion
            dispatch({
                type: types.newMessage,
                payload: msg
            })
            //Mover el scroll al final
            scrollToBottomAnimated('messages');
        })
    }, [socket, dispatch]);

    useEffect(() => {
        socket?.on('list-notes', (notes) => {
            //dispatch de una accion
            dispatch({
                type: types.loadNotes,
                payload: notes
            })
        })
    }, [socket, dispatch]);




    return (
        <SocketContext.Provider value={{ socket, online }}>
            {children}
        </SocketContext.Provider>
    )
}