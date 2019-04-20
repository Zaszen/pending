import React from 'react';

import Cell  from '../Cell/Cell';
import PopupMessage from '../PopupMessage/PopupMessage';

require('./Grid.less');

const Grid = props =>{
    return(
        <React.Fragment>
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
                {
                    (props.stateOfGame.win || props.stateOfGame.loss) ? 
                        <PopupMessage 
                            playAgain={props.playAgain}
                        />
                    : 
                        null
                }
            </div>    
            
        </React.Fragment>
    );
}

export default Grid;