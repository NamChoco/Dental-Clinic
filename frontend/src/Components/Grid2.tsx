import React from 'react';
import './Grid.css';

function Grid2(props: { children: any; }){
    const {children} = props;
    return(
        <div className="grid2">
            {children}

        </div>
    );
}

export default Grid2;