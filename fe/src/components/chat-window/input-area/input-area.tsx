import React from 'react';



import './input-area.css';


function InputArea() {
    return (
        <div className="container input-area-spec">
            <div className="row padding-spec">
                <div className="col-10">
                    <input placeholder="Input text here..." className="input-box-spec" />
                </div>
                <div className="col-2">
                    <button className="btn btn-primary" type="submit">Send</button>
                </div>
            </div>
        </div>
    );
}

export default InputArea;
