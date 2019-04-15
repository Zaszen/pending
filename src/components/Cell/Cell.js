import React from 'react';

require('./Cell.less');


const Cell = React.memo(props =>{

    const handleClickCell = (col, row) =>{
        if(props.cell == null){
            props.revealCell(col, row);
        }
    }
    
    return(
        <div 
            className="cell" 
            onClick={()=>handleClickCell(props.col, props.row)}
        >
            <div className="cell-content">
                {props.cell}
            </div>
        </div>    
    );
});

export default Cell;