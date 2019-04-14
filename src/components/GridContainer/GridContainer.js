import React from 'react';
import { useState } from 'react';

import Grid from '../Grid/Grid'

const gridSize = 10;
const bombNumber = 15; 

let cpt = 0;



const arrayCreateGrid = () =>{
    let tempGrid = [...Array(gridSize).fill("")].map(e => Array(gridSize).fill(""));

    //adding bomb
    while(cpt < bombNumber){
        let row = Math.floor(Math.random() * gridSize);
        let col = Math.floor(Math.random() * gridSize);
        if(tempGrid[col][row] !== "X"){
            tempGrid[col][row] = "X"
            cpt++;
        }
    };

    //adding number
    for(let col=0; col < gridSize; col++){
        for(let row=0; row < gridSize; row++){
            if(tempGrid[col][row] !== "X"){

                let neighborNumber = 0;
                // col4 row 5
                
                //8
                if(row > 0)
                    tempGrid[col][row-1] === "X" && neighborNumber++;
                
                //9
                if( col < gridSize-1 && row > 0 )    
                    tempGrid[col+1][row-1] === "X" && neighborNumber++;
                
                //6
                if( col < gridSize-1) 
                    tempGrid[col+1][row] === "X" && neighborNumber++;

                //3    
                if( col < gridSize-1 && row < gridSize-1 )
                    tempGrid[col+1][row+1] === "X" && neighborNumber++;
                
                //2
                if(row < gridSize-1)
                    tempGrid[col][row+1] === "X" && neighborNumber++;
                
                //1
                if( col > 0 && row < gridSize-1)
                    tempGrid[col-1][row+1] === "X" && neighborNumber++;
                
                //4
                if(col > 0)
                    tempGrid[col-1][row] === "X" && neighborNumber++;
                
                //7
                if(col > 0 && row > 0)
                    tempGrid[col-1][row-1] === "X" && neighborNumber++;

                tempGrid[col][row] = neighborNumber.toString();

            }
        }
    }

    return tempGrid;
}


const GridContainer = props =>{

    const [grid, setGrid] = useState([...arrayCreateGrid()]);

    return(
        <Grid 
            grid={grid}
        />  
    );
}

export default GridContainer;