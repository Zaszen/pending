import React from 'react';

require('./Cell.less');

const Cell = props =>{
    return(
        <div className="cell">
            <div className="cell-content" />
        </div>    
    );
}

export default Cell;