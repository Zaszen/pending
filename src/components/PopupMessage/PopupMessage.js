import React from 'react';

require('./PopupMessage.less');


const PopupMessage = props =>{

    const handleClickOk = () =>{
        
    }
    
    return(
        <div className="modal">
            <div id="popup-message">
                <div className="popup-message">{props.message}</div>
                <button id="bt-play-again">Play Again</button>
            </div>    
        </div>
    );
};

export default PopupMessage;