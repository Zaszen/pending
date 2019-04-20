import React from 'react';

require('./Cell.less');


const Cell = React.memo(props =>{

    const handleClickCell = (col, row) =>{
        if(props.cell == null){
            props.revealCell(col, row);
        }
    }

    const getCellClassName = () =>{
        let cellClassName = "cell";

        if(props.cell === "0"){
            cellClassName+= " empty"
        }

        return cellClassName;
    }
    // console.log("render cell col: " + props.col + ", row: " + props.row)
    // console.log(" --> props:", props);
    return(
        <div 
            className={getCellClassName()} 
            onClick={()=>handleClickCell(props.col, props.row)}
        >
            <div className="cell-content">
                {props.cell !== "0" ? props.cell: ""}
            </div>
        </div>    
    );
});

export default Cell;