import React from 'react';


import Header from './header/header';
import MessageArea from './message-area/message-area';
import InputArea from './input-area/input-area';
import './chat-window.css';


function ChatWindow() {
    return (
        <div className="container">
            <div className="row">
                <Header />
            </div>
            <div className="row">
                <MessageArea />
            </div>
            <div className="row">
                <InputArea />
            </div>
        </div>
    );
}

export default ChatWindow;
