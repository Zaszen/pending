import React from 'react';
import { useState } from 'react';

import Grid from '../Grid/Grid'

const gridSize = 10;
const bombNumber = 15; 

let cpt = 0;

const arrayCreateGrid = () =>{
    let tempGrid = [...Array(gridSize).fill("")].map(e => Array(gridSize).fill({exposed: false, value:"0"}));

    //adding bomb
    while(cpt < bombNumber){
        let row = Math.floor(Math.random() * gridSize);
        let col = Math.floor(Math.random() * gridSize);
        if(tempGrid[col][row].value !== "X"){
            tempGrid[col][row] = {exposed: false, value:"X"}
            cpt++;
        }
    };

    //adding number
    for(let col=0; col < gridSize; col++){
        for(let row=0; row < gridSize; row++){
            if(tempGrid[col][row].value !== "X"){

                let neighborNumber = 0;
                
                //8
                if(row > 0)
                    tempGrid[col][row-1].value === "X" && neighborNumber++;
                
                //9
                if( col < gridSize-1 && row > 0 )    
                    tempGrid[col+1][row-1].value === "X" && neighborNumber++;
                
                //6
                if( col < gridSize-1) 
                    tempGrid[col+1][row].value === "X" && neighborNumber++;

                //3    
                if( col < gridSize-1 && row < gridSize-1 )
                    tempGrid[col+1][row+1].value === "X" && neighborNumber++;
                
                //2
                if(row < gridSize-1)
                    tempGrid[col][row+1].value === "X" && neighborNumber++;
                
                //1
                if( col > 0 && row < gridSize-1)
                    tempGrid[col-1][row+1].value === "X" && neighborNumber++;
                
                //4
                if(col > 0)
                    tempGrid[col-1][row].value === "X" && neighborNumber++;
                
                //7
                if(col > 0 && row > 0)
                    tempGrid[col-1][row-1].value === "X" && neighborNumber++;

                tempGrid[col][row] = {exposed: false, value: neighborNumber.toString()};

            }
        }
    }

    return tempGrid;
}

const GridContainer = props => {

    const [grid, setGrid] = useState([...arrayCreateGrid()]);

    const revealCell = (col, row) => {
        let tempGrid = [...grid];
        tempGrid[col][row] = {exposed: true, value: tempGrid[col][row].value}; 

        if(tempGrid[col][row].value === "0")
            propagateReveal(tempGrid, col,row);

        setGrid(tempGrid);
    };

    const propagateReveal = (grid, col, row) =>{

        //8
        if(row > 0 && !grid[col][row-1].exposed){
            grid[col][row-1] = {exposed: true, value: grid[col][row-1].value};
            grid[col][row-1].value === "0" && propagateReveal(grid, col, row-1);
        }
        
        //9
        if(col < gridSize-1 && row > 0 && !grid[col+1][row-1].exposed){
            grid[col+1][row-1] = {exposed: true, value: grid[col+1][row-1].value};
            grid[col+1][row-1].value === "0" && propagateReveal(grid, col+1, row-1);
        }    
        
        //6
        if(col < gridSize-1 && !grid[col+1][row].exposed){
            grid[col+1][row] = {exposed: true, value: grid[col+1][row].value};
            grid[col+1][row].value === "0" && propagateReveal(grid, col+1, row);
        }

        //3    
        if(col < gridSize-1 && row < gridSize-1 && !grid[col+1][row+1].exposed){
            grid[col+1][row+1] = {exposed: true, value: grid[col+1][row+1].value};
            grid[col+1][row+1].value === "0" && propagateReveal(grid, col+1, row+1);
        }
        
        //2
        if(row < gridSize-1 && !grid[col][row+1].exposed){
            grid[col][row+1] = {exposed: true, value: grid[col][row+1].value}
            grid[col][row+1].value === "0" && propagateReveal(grid, col, row+1);
        }
        
        //1
        if( col > 0 && row < gridSize-1 && !grid[col-1][row+1].exposed){
            grid[col-1][row+1] = {exposed: true, value: grid[col-1][row+1].value};
            grid[col-1][row+1].value === "0" && propagateReveal(grid, col-1, row+1);
        }
        
        //4
        if(col > 0 && !grid[col-1][row].exposed){
            grid[col-1][row] = {exposed: true, value: grid[col-1][row].value};
            grid[col-1][row].value === "0" && propagateReveal(grid, col-1, row);
        }
        
        //7
        if(col > 0 && row > 0 && !grid[col-1][row-1].exposed){
            grid[col-1][row-1] = {exposed: true, value: grid[col-1][row-1].value};
            grid[col-1][row-1].value === "0"  && propagateReveal(grid, col-1, row-1);
        }
    };

    return(
        <Grid 
            grid={grid}
            revealCell={revealCell}
        />  
    );
}

export default GridContainer;