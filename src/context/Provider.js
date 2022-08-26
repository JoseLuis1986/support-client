import { createContext, useReducer } from "react";
import { ChatContext } from "./chat/ChatContext";
import { chatReducer } from "./chat/chatReducer";
// import { AuthContext } from "../auth/AuthContext";
// import { scrollToBottomAnimated } from "../helpers/scrollToBottom";
// import { useSocket } from "../hooks/useSocket";
// import { types } from "../types/types";
import chatInitialState from "./initialstates/chatInitialState";
import notesInitialState from "./initialstates/notesInitialState";
import { chat } from "./reducers/chat";
import { notes } from "./reducers/notes";


export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {

    // const { socket, online, connectSocket, disconnectSocket } = useSocket('http://localhost:8080');

    // const { auth } = useContext(AuthContext);


    // const [ chatState, dispatch ] = useReducer( chatReducer, chatInitialState);
    const [chatState, chatDispatch] = useReducer(chat, chatInitialState)
    
    const [ noteState, notesDispatch ] = useReducer( notes, notesInitialState);

    console.log(chatState);



    return <GlobalContext.Provider value={{
        chatState,
        chatDispatch,
        noteState,
        notesDispatch
    }}>
        {children}
    </GlobalContext.Provider>
};