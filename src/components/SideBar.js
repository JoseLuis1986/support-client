import React from 'react';
import { SibeBarChatItem } from './SibeBarChatItem';


const chats = [1,2,3,4,5,6,7,8];

export const SideBar = () => {
    return (
        <div className="inbox_chat">
            {
                chats.map(( chat ) => (
                    <SibeBarChatItem key={ chat }/>
                ))
            }

            {/* <!-- Espacio extra para scroll --> */}
            <div className="extra_space"></div>


        </div>
    )
}
