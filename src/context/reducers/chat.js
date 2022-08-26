import { types } from "../../types/types";

// const initialState = {
//     uid: '',
//     chatActive: null, //UID del usuario al que yo quiero enviar mensajes 
//     users: [], // Todos los usuarios de la base de datos
//     msjs: [] //el chat seleccionado 
// }


export const chat = (state, action) => {

    switch (action.type) {

        case types.usersLoaded:
            return {
                ...state,
                users: [...action.payload]
            }

        case types.activeChat:
            if (state.chatActive === action.payload) return state;

            return {
                ...state,
                chatActive: action.payload,
                msjs: []
            }

        case types.newMessage:
            if (state.chatActive === action.payload.from ||
                state.chatActive === action.payload.to
            ) {
                return {
                    ...state,
                    msjs: [...state.msjs, action.payload]
                }
            } else {
                return state;
            }

            case types.loadMessages:

                return {
                    ...state,
                    msjs: [...action.payload]
                }


        case types.closeSession:
            return {
                uid:'',
                chatActive: null,
                users: [],
                msjs: []
            }

        default:
            return state;
    }
}