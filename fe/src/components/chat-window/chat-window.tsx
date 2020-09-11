import React from 'react';


import Header from './header/header';
import MessageArea from './message-area/message-area';
import InputArea from './input-area/input-area';
import './chat-window.css';


function ChatWindow() {
    return (
        <div className="container" style={{height:'45rem'}}>
            <div className="row">
                <Header />
            </div>
            <div className="row" style={{height:'70%', marginTop:'5%'}}>
                <MessageArea />
            </div>
            <div className="row" style={{height:'10%', marginTop:'5%'}}>
                <InputArea />
            </div>
        </div>
    );
}

export default ChatWindow;
