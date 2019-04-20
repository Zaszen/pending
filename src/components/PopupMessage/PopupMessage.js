import React from 'react';

require('./PopupMessage.less');


const PopupMessage = props =>{

    const handleClickPlayAgain = () =>{
        props.playAgain();
    }
    
    return(
        <div className="modal">
            <div id="popup-message">
                <div className="popup-message">{props.message}</div>
                <button id="bt-play-again" onClick={handleClickPlayAgain}>Play Again</button>
            </div>    
        </div>
    );
};

export default PopupMessage;