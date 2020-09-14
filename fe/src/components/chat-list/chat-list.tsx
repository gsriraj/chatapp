import React from 'react';


import Header from './header/header'
import './chat-list.css';


function ChatList() {
    return (
        <div className="container list-spec-bg" style={{ padding: '2rem' }}>
            <div className="row">
                <Header />
            </div>
            <br />
            <div className="row">
                <ul className="list-group list-spec">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div className="row">
                            <div className="col-2">
                                <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" />
                            </div>
                            <div className="col-8" style={{marginTop:'0.4rem', width:'100%'}}>
                                Cras justo odio
                            </div>
                            <div className="col-2" style={{marginTop:'0.4rem'}}>
                                <span className="badge badge-primary badge-pill">14</span>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div className="row">
                            <div className="col-2">
                                <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" />
                            </div>
                            <div className="col-8" style={{marginTop:'0.4rem', width:'100%'}}>
                                Cras justo odio
                            </div>
                            <div className="col-2" style={{marginTop:'0.4rem'}}>
                                <span className="badge badge-primary badge-pill">14</span>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div className="row">
                            <div className="col-2">
                                <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" />
                            </div>
                            <div className="col-8" style={{marginTop:'0.4rem', width:'100%'}}>
                                Sriraj G  
                            </div>
                            <div className="col-2" style={{marginTop:'0.4rem'}}>
                                <span className="badge badge-primary badge-pill">14</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ChatList;
