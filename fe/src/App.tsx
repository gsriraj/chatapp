import React from 'react';


import ChatList from './components/chat-list/chat-list';
import ChatWindow from './components/chat-window/chat-window';
import './App.css';


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4" style={{height: '45rem'}}>
          <ChatList />
        </div>
        <div className="col-8" style={{height: '45rem'}}>
          <ChatWindow />
        </div>
      </div>
    </div>
  );
}

export default App;
