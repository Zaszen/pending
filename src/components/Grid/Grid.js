import React from 'react';

import Cell  from '../Cell/Cell';

require('./Grid.less');

const Grid = props =>{
    return(
        <div className="grid">
            {
                props.grid.map((row,rowIndex) => {
                    
                    return(
                        <div className="row" key={"row-"+rowIndex}>
                        {
                            row.map((cell, cellIndex) => {
                                return (
                                    <div key={"cell-row-"+rowIndex+"-cell"+cellIndex} >
                                        <Cell
                                            
                                        />
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