import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';
import { GlobalContext } from '../context/Provider';
import { SibeBarChatItem } from './SibeBarChatItem';


export const SideBar = () => {

    const { chatState } = useContext( ChatContext );

    const { users } = chatState;

    const { auth } = useContext(AuthContext);
    const { uid } = auth;

    return (
        <div className="inbox_chat">
            {
                users
                .filter( user => user.uid !== uid )
                .map(( users ) => (
                    <SibeBarChatItem 
                        key={ users.uid } 
                        user={ users }
                    />
                ))
            }

            {/* <!-- Espacio extra para scroll --> */}
            <div className="extra_space"></div>


        </div>
    )
}
