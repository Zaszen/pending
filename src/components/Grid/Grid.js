import React from 'react';

import Cell  from '../Cell/Cell';

const Grid = props =>{
    return(
        <div>
            {
                props.grid.map((row,rowIndex) => {
                    
                    return(
                        <div className="row" key={"row-"+rowIndex}>
                        {
                            row.map((cell, cellIndex) => {
                                return (
                                    <div key={"cell-row-"+rowIndex+"-cell"+cellIndex} >
                                        {cell}
                                    </div>
                                )
                            })
                        }
                        </div>
                    )                             
                })
            }
        </div>    
    );
}

export default Grid;