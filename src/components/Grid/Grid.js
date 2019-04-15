import React from 'react';

import Cell  from '../Cell/Cell';

require('./Grid.less');

const Grid = props =>{
    return(
        <div className="grid">
            {
                props.grid.map((col,colIndex) => {
                    
                    return(
                        <div className="col" key={"col-"+colIndex}>
                        {
                            col.map((cell, rowIndex) => {
                                return (
                                    <div key={"cell-col-"+colIndex+"-row"+rowIndex} >
                                        <Cell
                                            cell={cell.exposed ? cell.value : null}
                                            row={rowIndex}
                                            col={colIndex}
                                            revealCell={props.revealCell}
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