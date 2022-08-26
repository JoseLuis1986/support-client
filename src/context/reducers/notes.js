import { types } from '../../types/types';


// const initialState = {
//     uid: '',
//     title: null, //UID del usuario al que yo quiero enviar mensajes 
//     body: null, // Todos los usuarios de la base de datos
//     url: null //el chat seleccionado 
// }


export const notes = ( state, action ) => {

    switch (action.type) {
        case types.uploadPic:
            return{
                ...state,
                url: action.payload
            }
        case types.saveNotes:
            return{
                ...state,
                ...action.payload
            }
        case types.loadNotes:
            return{
                ...state,
                notes: [...action.payload]
            }
        case types.cleanFormNote:
            return {
                ...state,
                title: null, 
                body: null, 
                url: null 
            }
    
        default:
            return state;
    }
}
