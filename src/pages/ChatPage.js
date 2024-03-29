import React, { useContext } from 'react';
import { ChatSelect } from '../components/ChatSelect';
import { InboxPeople } from '../components/InboxPeople';
import { Messages } from '../components/Messages';
import { ChatContext } from '../context/chat/ChatContext';
// import { GlobalContext } from '../context/Provider';
import '../css/chat.css';



export const ChatPage = () => {
    
    // const { chatState } = useContext(ChatContext);
    const { chatState } =useContext(ChatContext);

    return (
        <div className="messaging">
            <div className="inbox_msg">

                <InboxPeople />

                {
                    ( chatState.chatActive )
                    ? <Messages />
                    : <ChatSelect />
                }

            </div>
        </div>
    )
}
