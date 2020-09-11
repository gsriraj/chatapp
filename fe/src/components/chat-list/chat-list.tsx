import React from 'react';


import Header from './header/header'
import './chat-list.css';


function ChatList() {
    return (
        <div className="container list-spec-bg" style={{padding:'2rem'}}>
            <div className="row">
                <Header />
            </div>
            <br />
            <div className="row">
                <ul className="list-group list-spec">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Cras justo odio
                        <span className="badge badge-primary badge-pill">14</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Dapibus ac facilisis in
                        <span className="badge badge-primary badge-pill">2</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Morbi leo risus
                        <span className="badge badge-primary badge-pill">1</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ChatList;
