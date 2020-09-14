import React from 'react';


import Header from './header/header'
import './chat-list.css';


const userData = [
    {
        name: "Rajeev Shankar",
        message: "12"
    },
    {
        name: "Ram Kumar",
        message: "16"
    },
    {
        name: "Random",
        message: "111"
    },
    {
        name: "Raj Gopalakrishnan",
        message: "18"
    },
    {
        name: "Sri Gopala",
        message: "11"
    },
    {
        name: "Gopalakrishnan",
        message: "100"
    },
    {
        name: "Sriraj Gopalakrishnan",
        message: "15"
    },
    {
        name: "Sriraj Gopalakrishnan",
        message: "15"
    },
    {
        name: "Sri Gopala",
        message: "11"
    },
    {
        name: "Gopalakrishnan",
        message: "100"
    },
    {
        name: "Sriraj Gopalakrishnan",
        message: "15"
    },
    {
        name: "Sriraj Gopalakrishnan",
        message: "15"
    }
]


function ChatList() {
    return (
        <div className="container list-spec-bg" style={{ padding: '2rem' }}>
            <div className="row">
                <Header />
            </div>
            <br />
            <div className="row" style={{overflowY:'scroll', height:'90%'}}>
                {userData.map((data: any, index: number) => (
                    <ul className="list-group list-spec">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <div className="row" style={{ width: '100%' }}>
                                <div className="col-2" style={{ width: '100%' }}>
                                    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" />
                                </div>
                                <div className="col-8 text-name-spec" style={{ marginTop: '0.4rem', width: '100%' }}>
                                    {data.name}
                                </div>
                                <div className="col-1" style={{ marginTop: '0.4rem', width: '100%' }}>
                                    <span className="badge badge-primary badge-pill">{data.message}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
}

export default ChatList;
