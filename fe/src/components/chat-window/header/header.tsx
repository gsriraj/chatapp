import React from 'react';



import './header.css';


function Header() {
  return (
    <div className="container header-spec-chat">
      <div className="row">
        <div className="col-1">
          <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" />
        </div>
        <div className="col-5 margin-spec">
          <span>Lorem Ipsum</span>
        </div>
        <div className="col-4">
          {/* space */}
        </div>
        <div className="col-2 margin-spec">
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Header;
