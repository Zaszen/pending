import React from 'react';

require('./Cell.less');


const Cell = React.memo(props =>{

    const handleClickCell = (col, row) =>{
        if(props.value === null){
            props.revealCell(col, row);
        }
    }

    const handleRightClickCell = (e, col, row) =>{
        if(props.value === null){
            props.markCell(col, row);
        }
        e.preventDefault();
    }

    const getCellClassName = () =>{
        let cellClassName = "cell";

        if(props.value === "0"){
            cellClassName+= " empty";
        }

        if(props.isFlaged){
            cellClassName+= " flaged";
        }

        return cellClassName;
    }
    // console.log("render cell col: " + props.col + ", row: " + props.row)
    // console.log(" --> props:", props);
    return(
        <div 
            className={getCellClassName()} 
            onClick={()=>handleClickCell(props.col, props.row)}
            onContextMenu={(e)=>handleRightClickCell(e, props.col, props.row)}

        >
            <div className="cell-content">
                {props.value !== "0" ? props.value: ""}
            </div>
        </div>    
    );
});

export default Cell;