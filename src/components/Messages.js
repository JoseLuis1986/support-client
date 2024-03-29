import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';
import { IncomingMessage } from './IncomingMessage';
import { OutgoingMessage } from './OutgoingMessage';
import { SendMessages } from './SendMessages';

export const Messages = () => {

    const { chatState } = useContext( ChatContext ); 
    const { auth } = useContext( AuthContext );

    const{ msjs } = chatState;


    return (
        <div className="mesgs">

            {/* <!-- Historia inicio --> */}
            <div 
                id='messages'
                className="msg_history"
                >

                {
                    msjs.map((msg) => (
                    ( msg.to === auth.uid )
                    ? <IncomingMessage key={ msg._id } msg={ msg }/>
                    : <OutgoingMessage key={ msg._id } msg={ msg }/>
                    ))
                }


            </div>
            {/* <!-- Historia Fin --> */}

            <SendMessages />

        </div>
    )
}
