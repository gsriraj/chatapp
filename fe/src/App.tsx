import React from 'react';


import ChatList from './components/chat-list/chat-list';
import ChatWindow from './components/chat-window/chat-window';
import './App.css';


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <ChatList />
        </div>
        <div className="col-8">
          <ChatWindow />
        </div>
      </div>
    </div>
  );
}

export default App;
