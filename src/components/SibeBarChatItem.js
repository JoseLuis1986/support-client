import React, { useContext } from 'react';
import { ChatContext } from '../context/chat/ChatContext';
import { fetchWithToken } from '../helpers/fetch';
import { scrollToBottom } from '../helpers/scrollToBottom';
import { types } from '../types/types';



export const SibeBarChatItem = ({ user }) => {

    const { chatState, dispatch } = useContext(ChatContext);
    const { chatActive } = chatState;

    console.log(chatActive);

    const activechat = async() => {

        dispatch({
            type: types.activeChat,
            payload: user.uid
        })

        // Cargar los mensajes del chat
        const resp = await fetchWithToken(`message/${ user.uid }`);

        dispatch({
            type: types.loadMessages,
            payload: resp.mensajes
        });

        //Mover el scroll
        scrollToBottom( 'messages' );
    }

    return (
        <div
            className={`chat_list ${ (user.uid === chatActive) && 'active_chat'}`}
            onClick={activechat}
        >
            {/* active_chat */}
            <div className="chat_people">
                <div className="chat_img">
                    <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="user" />
                </div>
                <div className="chat_ib">
                    <h5>{user.name}</h5>
                    {
                        (user.online)
                            ? <span className="text-success">Online</span>
                            : <span className="text-danger">Offline</span>
                    }
                </div>
            </div>
        </div>
    )
}
