import React from 'react';

export const SibeBarChatItem = () => {
    return (
        <div className="chat_list">
            {/* active_chat */}
            <div className="chat_people">
                <div className="chat_img">
                    <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="user" />
                </div>
                <div className="chat_ib">
                    <h5>Some random name</h5>
                    <span className="text-success">Online</span>
                    <span className="text-danger">Offline</span>
                </div>
            </div>
        </div>
    )
}
