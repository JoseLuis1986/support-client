import { createContext, useReducer } from "react";
// import { AuthContext } from "../../auth/AuthContext";
// import { useSocket } from "../../hooks/useSocket";
// import { types } from "../../types/types";
// import { SocketContext } from "../SocketContext";
import { notesReducer } from "./notesReducer";



export const NoteContext = createContext();

const initialState = {
    title: null, 
    body: null, 
    url: null,
}

export const NoteProvider = ({ children }) => {

    const [noteState, dispatch] = useReducer( notesReducer, initialState );

    
    return(
        <NoteContext.Provider value={{
            noteState,
            dispatch
        }}>
            {children}
        </NoteContext.Provider>
    )
}