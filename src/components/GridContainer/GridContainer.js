import React from 'react';
import { useState } from 'react';

import Grid from '../Grid/Grid'

let flatGrid = [...Array(6).fill("")].map(e => Array(6).fill(""));

const GridContainer = props =>{

    const [grid, setGrid] = useState([...flatGrid]);

    return(
        <Grid 
            grid={grid}
        />  
    );
}

export default GridContainer;